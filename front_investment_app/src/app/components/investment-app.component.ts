import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'investment-app',
  standalone: true,
  imports: [NavBarComponent, CarouselComponent],
  templateUrl: './investment-app.component.html'  
})
export class InvestmentAppComponent {

  
}
