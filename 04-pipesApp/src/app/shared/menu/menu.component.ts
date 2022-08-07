import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Date',
            icon: 'pi pi-calendar',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'Rare',
            icon: 'pi pi-globe',
            routerLink: '/rare',
          },
        ],
      },
      { label: 'Personalized', routerLink: '/sort', icon: 'pi pi-user' },
    ];
  }
}
