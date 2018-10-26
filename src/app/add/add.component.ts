import {Component, OnInit} from '@angular/core';
import {Element} from '../elem.model';
import {GetElementsService} from '../get-elements.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  elem: Element = {
    name: '',
    price: '',
    linkImg: '',
    description: '',
    type: ''
  };

  constructor(public fire: GetElementsService) {
  }
  addNote(elem: Element ) {
    this.fire.addElem(elem).then(ref => {
      alert("Add");
    });

  }
  changetype(type) {
    localStorage.setItem('type', type);
  }
  ngOnInit() {
  }

}
