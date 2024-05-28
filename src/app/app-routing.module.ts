import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', redirectTo:'/products', pathMatch: 'full' },
  { path: 'products', component: DisplayProductComponent },
  { path: 'products/:productName', component: ProductDetailComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'reactive-form', component: ReactiveFormsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DisplayProductComponent, PageNotFoundComponent,ProductDetailComponent,InscriptionComponent,ReactiveFormsComponent];