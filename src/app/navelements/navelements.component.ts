import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navelements',
  templateUrl: './navelements.component.html',
  styleUrls: ['./navelements.component.sass']
})
export class NavelementsComponent implements OnInit {
  NavList: any = [
    {
      name: 'Головна',
      linkRouter: 'main',
    },
    {
      name: 'Тюль',
      linkRouter: 'tulle',
    },
    {
      name: 'Готові комлекти',
      linkRouter: 'complement',
    },
    {
      name: 'Ламбрекени',
      linkRouter: 'pelments',
    },
    {
      name: 'Аксесуари',
      linkRouter: 'accessories',
    },
    {
      name: 'Для готелів, барів, ресторанів',
      linkRouter: 'hotel',
    },
    {
      name: 'Постіль, подушки, одіяла',
      linkRouter: 'bed',
      linkImg: 'https://images.ua.prom.st/613971795_w640_h640_vual_belaya_prestizh.jpg'
    },
    {
      name: 'Полотенця, халати',
      linkRouter: 'bathrobe',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
