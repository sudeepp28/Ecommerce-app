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
import { AppliancesComponent } from "./appliances/appliances.component";
import { ApplianceBannersComponent } from "./appliances/appliance-banners/appliance-banners.component";
import { ApplianceProductPageComponent } from "./appliances/appliance-product-page/appliance-product-page.component";
import { ApplianceProductDetailsComponent } from "./appliances/appliance-product-details/appliance-product-details.component";
import { ToysComponent } from "./toys/toys.component";
import { ToysBannerComponent } from "./toys/toys-banner/toys-banner.component";
import { ToysPageComponent } from "./toys/toys-page/toys-page.component";
import { ToysProductDetailsComponent } from "./toys/toys-product-details/toys-product-details.component";
import { FurnitureComponent } from "./furniture/furniture.component";
import { FunitureBannersComponent } from "./furniture/funiture-banners/funiture-banners.component";
import { FurniturePageComponent } from "./furniture/furniture-page/furniture-page.component";
import { FurnitureDetailsComponent } from "./furniture/furniture-details/furniture-details.component";






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
        CartComponent,
        BUYComponent,
        AppliancesComponent,
        ApplianceBannersComponent,
        ApplianceProductPageComponent,
        ApplianceProductDetailsComponent,
        ToysComponent,
        ToysBannerComponent,
        ToysPageComponent,
        ToysProductDetailsComponent,
        FurnitureComponent,
        FunitureBannersComponent,
        FurniturePageComponent,
        FurnitureDetailsComponent
       ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule]
})

export class AppModule{}