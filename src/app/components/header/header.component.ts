import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  find() {
    const findInput = document.getElementById('exampleFormControlInput1');
    if (findInput?.className === 'form-control') {
      document.getElementById('exampleFormControlInput1')?.focus();
    } else {
      this.router.navigate(['home']);
    }
  }
}
