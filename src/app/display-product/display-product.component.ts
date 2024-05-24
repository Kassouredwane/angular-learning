import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.css'
})
export class DisplayProductComponent {
  public products: product[] = [];
  constructor(private getProductService: ProductsServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getProductService.getProducts().subscribe(data => this.products = data);
    console.log(this.products);
  }
  onSelect(product: product) {
    this.router.navigate([product.productName], { relativeTo: this.route })
  }
}
