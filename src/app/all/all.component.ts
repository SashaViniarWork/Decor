import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.sass']
})
export class AllComponent implements OnInit {
  navigate: any = [
    {
      name: 'Тюль',
      linkRouter: 'tulle',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Штори',
      linkRouter: 'curtains',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Готові комлекти',
      linkRouter: 'complement',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Ламбрекени',
      linkRouter: 'pelments',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Аксесуари',
      linkRouter: 'accessories',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Для готелів, барів, ресторанів',
      linkRouter: 'hotel',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Постіль, подушки, одіяла',
      linkRouter: 'bed',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Полотенця, халати',
      linkRouter: 'bathrobe',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
