import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  products = [
    { name: 'Cliente 1', image: 'assets/client1.jpg' , description: ''},
    { name: 'Cliente 2', image: 'assets/client2.jpg' , description: '' },
    { name: 'Cliente 3', image: 'assets/client3.jpg' , description: ''},
  ];
}
