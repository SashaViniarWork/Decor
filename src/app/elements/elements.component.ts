import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Element} from '../elem.model';
import {GetElementsService} from '../get-elements.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.sass']
})
export class ElementsComponent implements OnInit {
  @Input() type: any;
  elemList: Observable<Element[]>;
  elem: any = [];
  p: number = 1;

  constructor(public fire: GetElementsService, public router: Router) {
    this.elemList = this.fire.getElemList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });

    this.elemList.subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].type === this.type) {
          this.elem.push(res[i]);
        }
      }
    });

  }

  NavToElem(key, item) {
    localStorage.setItem('name', item.name);
    localStorage.setItem('price', item.price);
    localStorage.setItem('colection', item.colection);
    localStorage.setItem('article', item.article);
    localStorage.setItem('width', item.width);
    localStorage.setItem('create', item.create);
    localStorage.setItem('link1', item.linkImg);
    localStorage.setItem('link2', item.linkImg1);
    localStorage.setItem('link3', item.linkImg2);
    localStorage.setItem('description', item.description);
    localStorage.setItem('key', item.key);
    this.router.navigate(['/element', key]);
  }


  ngOnInit() {
  }

}
