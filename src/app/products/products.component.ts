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
  products = Array.from({ length: 5 }, (_, i) => ({
    name: `Producto ${i + 1}`,
    image: `assets/img/product${i + 1}.jpg`,
    description : ""
  }));
}
