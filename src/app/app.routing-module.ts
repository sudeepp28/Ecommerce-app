import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MobileComponent } from './Mobiles/mobile.component';

import { ProductPageComponent } from './Mobiles/product-page/product-page.component';
import { ProductDetailsComponent } from './Mobiles/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { BUYComponent } from './buy/buy.component';
import { ApplianceComponent } from './Applances/appliance/appliance.component';
import { ApplianceProductPageComponent } from './Applances/appliance-product-page/appliance-product-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mobiles', component: MobileComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: 'product-details/:id/:pid', component: ProductDetailsComponent },
  {path:'cart',component:CartComponent},
  {path:'buy',component:BUYComponent},
  {path:'appliances', component:ApplianceComponent},
  {path:'Appliance-product/:id', component:ApplianceProductPageComponent} // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
