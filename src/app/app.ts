import { Component } from '@angular/core';
import { PortfolioPageComponent } from './components/portfolio-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { }
