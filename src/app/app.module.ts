import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SliderComponent } from "./home/slider/slider.component";
import { HeaderComponent } from "./header/header.component";
import { ProductChartComponent } from "./home/product-chart/product-chart.component";
import { AppRoutingModule } from "./app.routing-module";
import { MobileComponent } from "./Mobiles/Mobile/mobile.component";
import { HomeComponent } from "./home/home/home.component";
import { MSliderComponent } from "./Mobiles/mslider/mslider.component";


@NgModule({
    declarations:[AppComponent,SliderComponent,HeaderComponent,ProductChartComponent,MobileComponent,HomeComponent,MSliderComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule, BrowserModule,CommonModule,AppRoutingModule]
})

export class AppModule{}