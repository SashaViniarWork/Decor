import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Element} from '../elem.model';
import {GetElementsService} from '../get-elements.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.sass']
})
export class ElementsComponent implements OnInit {
  @Input() type: any;
  elemList: Observable<Element[]>;
  elem: any = [];
  constructor(public fire: GetElementsService) {
    this.elemList = this.fire.getElemList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });

    this.elemList.subscribe(res => {
      for (let i = 0; i< res.length; i++) {
        if (res[i].type === this.type) {
          this.elem.push(res[i]);
        }
      }
    })

  }

  ngOnInit() {
  }

}
