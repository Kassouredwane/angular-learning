import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { routingComponent } from './app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductComponent,
    routingComponent,
    ProductDetailComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
