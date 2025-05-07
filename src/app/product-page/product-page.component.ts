import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from '../Mobile_product-details';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-product-page',
  standalone: false,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  SelectedBannerId:number | null=null
product=Products;
selectedProductList: any[] = [];
selectedProductName: string = '';
  constructor(private mobileService:MobileService){}

  ngOnInit() {
    this.SelectedBannerId=this.mobileService.getSelectedProductId()
    console.log(this.SelectedBannerId);
    

    if(this.SelectedBannerId !==null){
      const matchedProduct=this.product.find(p=>p.id===this.SelectedBannerId)

      if(matchedProduct){
        const[key,value]=Object.entries(matchedProduct).find(([k])=>k!=='id')!;
        this.selectedProductName=key;
        this.selectedProductList=value;
      }
    }
  }
}
