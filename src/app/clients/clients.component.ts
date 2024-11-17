import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {
  clients = Array.from({ length: 11 }, (_, i) => ({
    name: `Cliente ${i + 1}`,
    image: `assets/img/client${i + 1}.jpg`,
  }));
}
