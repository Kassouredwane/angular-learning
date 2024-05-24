import { Component } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  public product: any;
  public productsCart: product[] = [];
  constructor(private getProductService: ProductsServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let productName: string;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let prdName = params.get('productName');
      if (prdName != null) productName = prdName;
    })
    this.getProductService.getProducts().subscribe(data => {
      this.product = data.find(prd => prd.productName == productName);
      console.log('product detail : ');
      console.log(this.product);
    });
    let cart: string | null = localStorage.getItem('productsCart');
    if (cart != null) this.productsCart = JSON.parse(cart); else console.log("productsCart local storage not found !");
  }
  goToProducts(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  addProductToCart(product: product): void {
    this.productsCart.push(product);
    localStorage.setItem("productsCart", JSON.stringify(this.productsCart));
  }
}
