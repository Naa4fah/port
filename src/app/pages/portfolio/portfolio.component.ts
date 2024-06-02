
import { Component, OnInit } from '@angular/core';
import '../../../assets/js/port.js';

declare function port():any;
  

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl:'./portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    
    port();
  }
}
