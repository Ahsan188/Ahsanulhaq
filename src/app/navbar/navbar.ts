
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
menuOpen = false;

navLinks = [
  { name: 'About', link: '/about' },
  { name: 'Skills', link: '/skill' },
  { name: 'Education', link: '/education' },
  { name: 'Projects', link: '/project' },
  { name: 'Contact Us', link: '/contact' }
];

}
