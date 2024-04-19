import { Component } from '@angular/core';
import { Profile } from './profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //addresses: string[]=[
   // 'Address 1',
   // 'Address 2',
 // ]
  profiles: Profile[] = [
    {
      name: 'Aditiya Preet',
      photoUrl: 'src/assets/aditiya_preet.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'Monika',
      photoUrl: 'src/assets/monika.webp',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Pritam Turkar',
      photoUrl: 'src/assets/pritam_turkar.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Rahkulpreet Pal',
      photoUrl: 'src/assets/rahkulpreet_pal.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Rahulpreet Sinha',
      photoUrl: 'src/assets/rahulpreet_sinha.avif',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Smith Sharma',
      photoUrl: 'src/assets/smith_sharma.avif',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Sunita Barve',
      photoUrl: 'src/assets/sunita_barve.jpeg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Tanavi kahista',
      photoUrl: 'src/assets/tanavi_kahista.webp',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Vaibhavi Sharma',
      photoUrl: 'src/assets/vaibhavi_sharma.webp',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Viraj Huganwane',
      photoUrl: 'src/assets/viraj_huganwane.jpg',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

  ];
}
