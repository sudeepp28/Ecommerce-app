import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SliderComponent } from "./slider/slider.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations:[AppComponent,SliderComponent,HeaderComponent],
    bootstrap:[AppComponent],
    imports: [FormsModule, BrowserModule,CommonModule]
})

export class AppModule{}