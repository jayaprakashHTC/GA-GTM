import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public routing: Router) {}

  onSubmit() {
    this.routing.navigate(['/', 'about']);

    // this.routing.navigate('/about');
  }
}
