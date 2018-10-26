import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Element} from './elem.model';

@Injectable()
export class GetElementsService {

  private ElemListRef;

  constructor(private db: AngularFireDatabase) {
    this.ElemListRef = this.db.list<Element>('Element-list');
  }

  getElemList() {
    return this.ElemListRef;
  }

  addElem(elem: Element) {
    return this.ElemListRef.push(elem);
  }

  updateElem(elem: Element) {
    return this.ElemListRef.update(elem.key, elem);
  }

  removeElem(elem: Element) {
    return this.ElemListRef.remove(elem.key);
  }

}
