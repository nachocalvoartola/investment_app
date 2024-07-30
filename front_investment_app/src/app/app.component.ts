import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentAppComponent } from './components/investment-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvestmentAppComponent],
  templateUrl: './app.component.html'  
})
export class AppComponent {
  title = 'front_investment_app';
}
