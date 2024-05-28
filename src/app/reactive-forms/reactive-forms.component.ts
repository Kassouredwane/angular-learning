import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  registrationProductForm!: FormGroup;
  constructor(private fb: FormBuilder, private _productService: ProductsServiceService) { }

  get productName() {
    return this.registrationProductForm.get('productName');
  }

  get title() {
    return this.registrationProductForm.get('title');
  }

  get image() {
    return this.registrationProductForm.get('image');
  }

  get price() {
    return this.registrationProductForm.get('price');
  }
  ngOnInit(): void {
    this.registrationProductForm = this.fb.group({
      productName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      title: ['', Validators.required],
      image: ['', Validators.required],
      price: [0, Validators.required],
    })
  }
  onSubmit() {
    this._productService.addProduct(this.registrationProductForm.value);
    console.log("product was added succefuly");
  }
}
