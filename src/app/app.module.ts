import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { FashionComponent } from "./fashion/fashion.component";
import { MensComponent } from "./fashion/mens/mens.component";
import { WomensComponent } from "./fashion/womens/womens.component";
import { KidsComponent } from "./fashion/kids/kids.component";
import { MensBannerComponent } from "./fashion/mens/mens-banner/mens-banner.component";
import { MensProductPageComponent } from "./fashion/mens/mens-product-page/mens-product-page.component";
import { MensProductDetailsComponent } from "./fashion/mens/mens-product-details/mens-product-details.component";
import { WomenBannerComponent } from "./fashion/womens/women-banner/women-banner.component";
import { WomenPageComponent } from "./fashion/womens/women-page/women-page.component";
import { WomenProductDetailsComponent } from "./fashion/womens/women-product-details/women-product-details.component";
import { KidsBannerComponent } from "./fashion/kids/kids-banner/kids-banner.component";
import { KidsPageComponent } from "./fashion/kids/kids-page/kids-page.component";
import { KidsDetailsComponent } from "./fashion/kids/kids-details/kids-details.component";
import { SigninComponent } from "./author/signin/signin.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./author/register/register.component";
import { BeautyComponent } from "./beauty/beauty.component";
import { BooksComponent } from "./books/books.component";
import { BeautyPageComponent } from "./beauty/beauty-page/beauty-page.component";
import { BooksPageComponent } from "./books/books-page/books-page.component";
import { BeautyProductComponent } from "./beauty/beauty-product/beauty-product.component";
import { BooksProductComponent } from "./books/books-product/books-product.component";






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
        FurnitureDetailsComponent,
        FashionComponent,MensComponent,
        WomensComponent,KidsComponent,
        MensBannerComponent,MensProductPageComponent,
        MensProductDetailsComponent,
        WomenBannerComponent,
        WomenPageComponent,
        WomenProductDetailsComponent,KidsBannerComponent,
        KidsPageComponent,KidsDetailsComponent,SigninComponent, RegisterComponent,
        BeautyComponent,BooksComponent, BeautyPageComponent,BooksPageComponent,BeautyProductComponent, BooksProductComponent
       ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule]
})

export class AppModule{}