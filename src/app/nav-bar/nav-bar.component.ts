import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  NavList: any = [
    {
      name: 'Головна',
      linkRouter: 'main',
    },
    {
      name: 'Наші товари',
      linkRouter: 'all',
    },
    {
      name: 'Про нас',
      linkRouter: 'about',
    },
    {
      name: 'Контакти',
      linkRouter: 'contact',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
