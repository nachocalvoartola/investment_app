import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'investment-app',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './investment-app.component.html'  
})
export class InvestmentAppComponent {

  
}
