import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import { product } from '../product';

@Component({
  selector: 'app-test-json-server',
  templateUrl: './test-json-server.component.html',
  styleUrl: './test-json-server.component.css'
})
export class TestJsonServerComponent implements OnInit {

  public productsData: product[] = [];

  constructor(private productService: ProductsServiceService) { }

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(data => this.productsData = data);
    // console.log(this.productsData);
  }
  onclick(){
    this.productService.getProductsJsonServer().subscribe(data => this.productsData=data);
    console.log(this.productsData);
  }
}
