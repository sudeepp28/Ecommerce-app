import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MobileComponent } from './Mobiles/mobile.component';

import { ProductPageComponent } from './Mobiles/product-page/product-page.component';
import { ProductDetailsComponent } from './Mobiles/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { BUYComponent } from './buy/buy.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ApplianceProductPageComponent } from './appliances/appliance-product-page/appliance-product-page.component';
import { ApplianceProductDetailsComponent } from './appliances/appliance-product-details/appliance-product-details.component';
import { ToysComponent } from './toys/toys.component';
import { ToysPageComponent } from './toys/toys-page/toys-page.component';
import { ToysProductDetailsComponent } from './toys/toys-product-details/toys-product-details.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { FurniturePageComponent } from './furniture/furniture-page/furniture-page.component';
import { FurnitureDetailsComponent } from './furniture/furniture-details/furniture-details.component';
import { FashionComponent } from './fashion/fashion.component';
import { MensComponent } from './fashion/mens/mens.component';
import { WomensComponent } from './fashion/womens/womens.component';
import { KidsComponent } from './fashion/kids/kids.component';
import { MensProductPageComponent } from './fashion/mens/mens-product-page/mens-product-page.component';
import { MensProductDetailsComponent } from './fashion/mens/mens-product-details/mens-product-details.component';
import { WomenPageComponent } from './fashion/womens/women-page/women-page.component';
import { WomenProductDetailsComponent } from './fashion/womens/women-product-details/women-product-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mobiles', component: MobileComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'product-details/:id/:pid', component: ProductDetailsComponent },
  {path:'cart',component:CartComponent},
  {path:'buy',component:BUYComponent},
  {path:'appliance', component:AppliancesComponent},
  {path:'appliance-product/:id',component:ApplianceProductPageComponent},
  {path:'appliance-product/:id/:pid',component:ApplianceProductDetailsComponent},
  {path:'toys', component:ToysComponent},
  {path:'toys-page/:id', component:ToysPageComponent},
  {path:'toys-details/:id/:pid', component:ToysProductDetailsComponent},
  {path:'furniture', component:FurnitureComponent},
  {path:'furniture-page/:id',component:FurniturePageComponent},
  {path:'furniture-details/:id/:pid', component:FurnitureDetailsComponent},
  {path:'fashion', component:FashionComponent},
  {path:'mens', component:MensComponent},
  {path:'womens',component:WomensComponent},
  {path:'kids',component:KidsComponent},
  {path:'mens-product/:id', component:MensProductPageComponent},
  {path:'mens-details/:id/:pid', component:MensProductDetailsComponent},
  {path:'women/:id', component:WomenPageComponent},
  {path:'womenProduct/:id/:pid', component:WomenProductDetailsComponent}
  // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
