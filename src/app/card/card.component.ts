import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public productsCard: product[] = [];
  constructor() { }

  ngOnInit(): void {
    let cardData: string | null = localStorage.getItem('productsCart');
    if(cardData!=null) this.productsCard=JSON.parse(cardData);
  }
}
