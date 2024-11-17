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
  creators = Array.from({ length: 4 }, (_, i) => ({
    name: `Devpop ${i + 1}`,
    image: `assets/img/team${i + 1}.jpg`,
    bio : ""
  }));
}
