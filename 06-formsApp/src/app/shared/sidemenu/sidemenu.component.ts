import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  public templateMenu: MenuItem[] = [
    {
      name: 'Basics',
      path: '/template-forms/basics',
    },
    {
      name: 'Dynamics',
      path: '/template-forms/dynamics',
    },
    {
      name: 'Switches',
      path: '/template-forms/switches',
    }
  ];
  public reactiveMenu: MenuItem[] = [
    {
      name: 'Basics',
      path: '/reactive-forms/basics',
    },
    {
      name: 'Dynamics',
      path: '/reactive-forms/dynamics',
    },
    {
      name: 'Switches',
      path: '/reactive-forms/switches',
    }
  ];
}
