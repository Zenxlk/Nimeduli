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
  clients = [
    { name: 'Cliente 1', image: 'assets/img/client1.jpg' },
    { name: 'Cliente 2', image: 'assets/img/client2.jpg' },
    { name: 'Cliente 3', image: 'assets/img/client3.jpg' },
  ];
}
