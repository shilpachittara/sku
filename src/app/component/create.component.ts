import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Sku } from '../model/sku';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create.component.css'],
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  @Input() datasku : Sku;
  groupIdValue: string;
  styleCodeValue: string;
  sizeCodeValue: string;
  skuCodeValue: string;
  costAfterOverHeadValue: any;
  b2bsp: any;
  b2csp: any;
  errorvalue:any;
  errors: any;
  model: string;

  constructor (
    private router  : Router, private service: SkuService
  ) {
    this.datasku = new Sku();
    this.model = "03";
  }

  ngOnInit() {
    this.groupIdValue = "Group ID";
    this.styleCodeValue = "Style Code";
    this.sizeCodeValue = "Size Code";
    this.skuCodeValue = "Sku Code";
    this.costAfterOverHeadValue = "Cost";
    this.b2bsp = "B2B Selling Price";
    this.b2csp = "Selling Price";
  }

  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

  save(){    
   if(this.validate()){
    this.service.postProducts(this.datasku).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/dashboard");
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
    
    if(this.model == "01"){
    if(this.datasku.category == null || this.datasku.subCategory == null || this.datasku.brand == null ||
    this.datasku.gender == null || this.datasku.collection == null || this.datasku.color == null || 
    this.datasku.colorVariation == null || this.datasku.size == null || this.datasku.manufacturingYear == null)
    {
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
        }}
    if(this.datasku.skuCode == null || this.datasku.productName== null || this.datasku.productDescription == null || this.datasku.actualColor == null
    || this.datasku.itemHeight == null || this.datasku.itemLength == null || this.datasku.itemVolume == null
    || this.datasku.itemWeight == null || this.datasku.itemWidth == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }

  /*statusCalculation(){
    // logic to calculate value
    if(this.datasku.packageWeight == null){
      this.datasku.status = "57%";
    }
    else if(this.datasku.basicCost == null){
      this.datasku.status = "70%";
    }
    else if(this.datasku.fulfillmentCost == null){
      this.datasku.status = "80%";
    }
    else if(this.datasku.b2bmargin == null){
      this.datasku.status ="85%";
    }
    else if(this.datasku.b2bSellingPrice == null){
      this.datasku.status = "92%";
    }
    else if(this.datasku.sellingPrice != null){
      this.datasku.status = "100%";
    }
  }*/

  generateId(){
    if(this.datasku.brand != null && this.datasku.category!= null && this.datasku.gender!= null 
      && this.datasku.subCategory){
    this.datasku.groupId = this.datasku.brand + this.datasku.category
     + this.datasku.gender + this.datasku.subCategory + "00000";
    this.groupIdValue = this.datasku.groupId;
      }

    if(this.datasku.groupId != null && this.datasku.color != null && this.datasku.colorVariation != null){
        this.datasku.styleCode = this.datasku.groupId + this.datasku.color + this.datasku.colorVariation;
        this.styleCodeValue = this.datasku.styleCode;
      }
    
    if(this.datasku.styleCode != null && this.datasku.size){
      this.datasku.sizeCode =  this.datasku.styleCode + this.datasku.size;
      this.sizeCodeValue = this.datasku.sizeCode;
    } 

    if(this.datasku.sizeCode != null && this.datasku.subBrand != null){
      this.datasku.skuCode = this.datasku.sizeCode + this.datasku.subBrand;
      this.skuCodeValue = this.datasku.skuCode;
    }
  }

  /*styleCode(){
    this.datasku.styleCode = this.datasku.groupId + this.datasku.color + this.datasku.colorVariation;
    this.styleCodeValue = this.datasku.styleCode;
  }

  sizeCode(){
    this.datasku.sizeCode =  this.datasku.styleCode + this.datasku.sizeCode;
    this.sizeCodeValue = this.datasku.sizeCode;
  }

  skuCode(){
    this.datasku.skuCode = this.datasku.sizeCode + this.datasku.subBrand;
    this.skuCodeValue = this.datasku.skuCode;
  }*/

  costCalculation(){
    if(this.datasku.brandingCost != null && this.datasku.brandingQuantity != null){
      this.datasku.brandingTotalCost = this.datasku.brandingCost*this.datasku.brandingQuantity;
   }
    if(this.datasku.basicCost != null && this.datasku.brandingTotalCost != null && this.datasku.fulfillmentCost != null)
    {
      this.datasku.costAfterOverhead = this.datasku.basicCost + this.datasku.brandingTotalCost
                                         + this.datasku.fulfillmentCost;
      this.costAfterOverHeadValue = this.datasku.costAfterOverhead;                                   
    }
    if(this.datasku.costAfterOverhead != null){
    if(this.datasku.b2bmargin != null){
      this.datasku.b2bSellingPrice = this.costAfterOverHeadValue / (1-(this.datasku.b2bmargin/100));
      this.b2bsp = this.datasku.b2bSellingPrice;
    }
    if(this.datasku.b2cmargin != null){
      this.datasku.sellingPrice = this.costAfterOverHeadValue / (1-(this.datasku.b2cmargin/100));
      this.b2csp = this.datasku.sellingPrice;
    }
  }

  }

  setData(data: Sku): void{
    this.datasku = data;
  }

}
