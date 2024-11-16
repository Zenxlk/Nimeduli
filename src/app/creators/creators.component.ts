import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creators',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './creators.component.html',
  styleUrl: './creators.component.css'
})
export class CreatorsComponent {
  creators = [
    { name: 'Cliente 1', bio: 'assets/client1.jpg' , image: '' },
    { name: 'Cliente 2', bio: 'assets/client2.jpg' , image: '' },
    { name: 'Cliente 3', bio: 'assets/client3.jpg' , image: ''},
  ];
}
