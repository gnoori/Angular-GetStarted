import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent {
  message: string = 'Not the page you are looking for';

  constructor(private router: Router) {}

  onBack(): void {
    this.router.navigate(['/welcome']);
  }
}
