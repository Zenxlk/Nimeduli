import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  activeTab: string = 'mision';

  clients = [
    { name: 'Cliente 1', image: 'assets/img/client1.jpg' },
    { name: 'Cliente 2', image: 'assets/img/client2.jpg' },
    { name: 'Cliente 3', image: 'assets/img/client3.jpg' },
  ];


  showSection(tab: string) {
    console.log(`Cambiando a la sección: ${tab}`);
    this.activeTab = tab;
  }
}
