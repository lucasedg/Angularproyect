import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo-de-angular';
}
// app.component.ts

import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos: Producto[] = [
    { nombre: 'Producto 1', costo: '10 USD' },
    { nombre: 'Producto 2', costo: '20 USD' },
    { nombre: 'Producto 3', costo: '30 USD' }
  ];
}
