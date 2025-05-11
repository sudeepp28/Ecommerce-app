import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SliderComponent } from "./home/slider/slider.component";
import { HeaderComponent } from "./header/header.component";
import { ProductChartComponent } from "./home/product-chart/product-chart.component";
import { AppRoutingModule } from "./app.routing-module";

import { HomeComponent } from "./home/home/home.component";
import { MFlexBoardComponent } from "./Mobiles/mflex-board/mflex-board.component";
import { MobilesContainerComponent } from "./Mobiles/mobiles-container/mobiles-container.component";
import { ProductPageComponent } from "./Mobiles/product-page/product-page.component";
import { MobileComponent } from "./Mobiles/mobile.component";
import { ProductDetailsComponent } from "./Mobiles/product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { BUYComponent } from "./buy/buy.component";





@NgModule({
    declarations:[AppComponent,
        SliderComponent,
        HeaderComponent,
        ProductChartComponent,
        MobileComponent,
        HomeComponent,
        MFlexBoardComponent,
        MobilesContainerComponent,
        ProductPageComponent,
        ProductDetailsComponent,
        CartComponent,BUYComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule]
})

export class AppModule{}