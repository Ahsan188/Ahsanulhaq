
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  statusMessage = '';

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { name, email, subject, message } = form.value;

    const mailto = new URL('mailto:yourname@example.com');
    mailto.searchParams.set('subject', subject);
    mailto.searchParams.set(
      'body',
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = mailto.toString();

    this.statusMessage =
      'Your email app should open with your message ready to send.';
  }
}
