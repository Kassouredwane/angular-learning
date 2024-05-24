import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private _url = 'assets/products.json';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this._url);
  }
}
