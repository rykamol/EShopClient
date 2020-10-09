import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopModuleComponent } from './components/shop-module/shop-module.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductUpdateComponent } from './components/product-update/product-update.component';

const routes: Routes = [
  {path:'',component:ShopModuleComponent},
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  {path:'product-add',component:ProductAddComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'signup',component:SignupComponent},
  {path:'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
