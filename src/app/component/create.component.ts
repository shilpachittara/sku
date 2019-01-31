import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Sku } from '../model/sku';
import { Input } from '@angular/core';
import { AppGlobalDataService } from '../service/app-global-data.service';
import { Code } from '../model/code';
import { Subcode } from '../model/subcode';
import { ManagementService } from '../service/management.service';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
    styleUrls   : ['./create.component.css'],
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  @Input() datasku : Sku;
  @Output()
  loadsku: EventEmitter<String> = new EventEmitter<String>();
  groupIdValue: string;
  styleCodeValue: string;
  sizeCodeValue: string;
  skuCodeValue: string;
  volume: any;
  costAfterOverHeadValue: any;
  b2bsp: any;
  b2csp: any;
  errorvalue:any;
  errors: any;
  model: string;
  dropDown: Subcode;
  categories: Code [];
  category: Code;
  subcategories: Subcode [];
  subcategory: Subcode;
  brands: Code [];
  brand: Code;
  subbrands: Code [];
  subbrand: Code;
  collections: Subcode [];
  collection: Subcode;
  colours: Code [];
  colour: Code;
  colourvariations: Subcode [];
  colourvariation: Subcode;
  genders: Code [];
  gender: Code;
  sizes: Code [];
  size: Code;
  taxes: Code [];
  tax: Code;

  constructor (
    private router  : Router, private service: SkuService,
    private manageservice: ManagementService,
    private globaldata: AppGlobalDataService, private elementRef: ElementRef
  ) {
    this.datasku = new Sku();
    this.model = "03";
    this.dropDown = new Subcode();
    this.category = new Code();
    this.subcategory = new Subcode();
    this.brand = new Code();
    this.subbrand = new Code();
    this.collection = new Subcode();
    this.colour = new Code();
    this.colourvariation = new Subcode();
    this.gender = new Code();
    this.size = new Code();
    this.tax = new Code();
  }

  ngOnInit() {
    this.groupIdValue = "Group ID";
    this.styleCodeValue = "Style Code";
    this.sizeCodeValue = "Size Code";
    this.skuCodeValue = "Sku Code";
    this.costAfterOverHeadValue = "Cost";
    this.b2bsp = "B2B Selling Price";
    this.b2csp = "Selling Price";
    this.globaldata.backurl = "Sku";
    this.volume = "Volumetric Weight"
    this.getcategories();
    this.getbrands();
    this.getsubbrands();
    this.getgenders();
    this.getcolours();
    this.getsizes();
    this.gettaxes();
  }

  getcategories(){
    this.dropDown.db = "category";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.categories = res.json()
      );
  }

  getsubcategoreis(){
    this.dropDown.db = "subcategory";
    // TO DO
    this.dropDown.name = this.category.name;
    this.dropDown.nameCode = this.category._id;
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.subcategories = res.json()
      );
      this.generateId();
  }

  getbrands(){
    this.dropDown.db = "brand";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.brands = res.json()
      );
  }

  getsubbrands(){
    this.dropDown.db = "subbrand";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.subbrands = res.json()
      );
  }

  getcollections(){
    // TO DO
    this.dropDown.db = "collection";
    this.dropDown.name = this.brand.name;
    this.dropDown.nameCode = this.brand._id;
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.collections = res.json()
      );
      this.generateId();
  }

  getgenders(){
    this.dropDown.db = "gender";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.genders = res.json()
      );
  }

  getcolours(){
    this.dropDown.db = "colour";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.colours = res.json()
      );
  }
  
  getcolourvariations(){
    // TO DO
    this.dropDown.db = "colourvariation";
    this.dropDown.name = this.colour.name;
    this.dropDown.nameCode = this.colour._id;
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.colourvariations = res.json()
      );
      this.generateId();
  }

  getsizes(){
    this.dropDown.db = "size";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.sizes = res.json()
      );
  }

  gettaxes(){
    this.dropDown.db = "tax";
    this.manageservice.getDropDown(this.dropDown).subscribe(
      (res) => this.taxes = res.json()
      );
  }

  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

  save(){    
   if(this.validate()){
    this.service.postProducts(this.datasku).subscribe(
      (skuId: string) =>
      {
        this.loadsku.emit();
        this.router.navigateByUrl("/sku/dashboard");
      },
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  formatdata(){
    this.datasku.category = this.category.name;
    this.datasku.subCategory = this.subcategory.subname;
    this.datasku.brand = this.brand.name;
    this.datasku.subBrand = this.subbrand.name;
    this.datasku.collection = this.collection.subname;
    this.datasku.colour = this.colour.name;
    this.datasku.colourVariation = this.colourvariation.subname;
    this.datasku.gender = this.gender.name;
    this.datasku.size = this.size.name;
    this.datasku.tax = this.tax.name;
    this.datasku.HSNCode = this.category._id;
  }

  validate(): Boolean{
    this.formatdata();
    this.errorvalue = true;
    const count = 0;
    
    if(this.model == "01"){
    if(this.datasku.category == null || this.datasku.subCategory == null || this.datasku.brand == null ||
    this.datasku.gender == null || this.datasku.collection == null || this.datasku.colour == null || this.datasku.subBrand == null
    || this.datasku.colourVariation == null || this.datasku.size == null || this.datasku.manufacturingYear == null)
    {
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
        }}
    if(this.datasku.skuCode == null || this.datasku.productName== null || this.datasku.productDescription == null || this.datasku.actualColour == null
    || this.datasku.itemHeight == null || this.datasku.itemLength == null || this.datasku.itemVolume == null
    || this.datasku.itemWeight == null || this.datasku.itemWidth == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }

  generateId(){
    // TO DO
    if(this.category._id != null && this.brand._id != null && this.gender._id != null 
      && this.subcategory.subnameCode != null){
    this.datasku.groupId = this.brand._id + this.category._id
     + this.gender._id + this.subcategory.subnameCode + "00000";
    this.groupIdValue = this.datasku.groupId;
      }

    if(this.datasku.groupId != null && this.colour._id != null && this.colourvariation.subnameCode != null){
        this.datasku.styleCode = this.datasku.groupId + this.colour._id + this.colourvariation.subnameCode;
        this.styleCodeValue = this.datasku.styleCode;
      }
    
    if(this.datasku.styleCode != null && this.size._id){
      this.datasku.sizeCode =  this.datasku.styleCode + this.size._id;
      this.sizeCodeValue = this.datasku.sizeCode;
    } 

    if(this.datasku.sizeCode != null && this.subbrand._id != null){
      this.datasku.skuCode = this.datasku.sizeCode + this.subbrand._id;
      this.skuCodeValue = this.datasku.skuCode;
    }
  }

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

  volumetricWeightCalculaion(){
    if(this.datasku.packageHeight != null && this.datasku.packageLength != null &&
       this.datasku.packageWeight != null && this.datasku.packageWidth != null){
         this.datasku.volumetricWeight = (this.datasku.packageWidth* this.datasku.packageLength
                                         *this.datasku.packageHeight)/306;
         this.volume = this.datasku.volumetricWeight;                              
       }
  }

  setData(data: Sku): void{
    this.datasku = data;
  }

}
