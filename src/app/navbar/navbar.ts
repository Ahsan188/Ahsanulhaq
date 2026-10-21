
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  navLinks = [
    { name: 'Skills', link: '#skills' },
    { name: 'About', link: '#about' },
    { name: 'Education', link: '#education' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact Us', link: '#contact_us' }
  ];
}
