import {Component, OnInit} from '@angular/core';
import {Slider} from 'ngx-slider';

@Component({
  selector: 'app-about-elem',
  templateUrl: './about-elem.component.html',
  styleUrls: ['./about-elem.component.sass']
})
export class AboutElemComponent implements OnInit {
  public slider = new Slider();
  AboutInfo: any = {};

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
  }

  ngOnInit() {
    const slideItems = [
      {src: localStorage.getItem('link1'), title: 'Title 1'},
      {src: localStorage.getItem('link2'), title: 'Title 2'},
      {src: localStorage.getItem('link3'), title: 'Title 3'},
    ];
    this.AboutInfo = {
      colection: localStorage.getItem('colection'),
      article: localStorage.getItem('article'),
      create: localStorage.getItem('create'),
      width: localStorage.getItem('width'),
      price: localStorage.getItem('price'),
      description: localStorage.getItem('description'),
    };
    console.log(slideItems);
    this.slider.items = slideItems;
  }

}
