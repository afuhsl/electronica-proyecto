import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Lecturas Individuales',
        routerLink: '/individual'
      },
      {
        label: 'Lecturas Generales',
        routerLink: '/global'
      },
     
    ];
  }
}
