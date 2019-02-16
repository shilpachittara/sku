import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Sku } from '../model/sku';
import { Input } from '@angular/core';
import { AppGlobalDataService } from '../service/app-global-data.service';
import { ManagementService } from '../service/management.service';
import { Subcode } from '../model/subcode';
import { Code } from '../model/code';
import { Skucode } from '../model/skucode';
import { KeycloakService } from '../service/keycloak.service';

@Component({
    styleUrls   : ['./action.component.css'],
  selector: 'app-action',
  templateUrl: './action.component.html'
})
export class ActionComponent implements OnInit {

  @Input() datasku : Sku;
  @Output()
  loadsku: EventEmitter<String> = new EventEmitter<String>();
  skuid: any;
  sku: Sku[];
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
  actionType: any;
  dropDown: Subcode;
  colours: Code [];
  colour: Code;
  colourvariations: Subcode [];
  colourvariation: Subcode;
  sizes: Code [];
  size: Code;
  taxes: Code [];
  tax: Code;;
  body: Skucode;

  constructor (
    private router  : Router, private service: SkuService, private globaldata: AppGlobalDataService,
    private route: ActivatedRoute,
    private keycloakservice: KeycloakService,
    private manageservice: ManagementService,
  ) {
    this.datasku = new Sku();
    this.colour = new Code();
    this.colourvariation = new Subcode();
    this.size = new Code();
    this.tax = new Code();
    this.body = new Skucode();
    this.sku = new Array<Sku>();
    this.dropDown = new Subcode();
  }

  ngOnInit() {
    this.disableForRoles();
      this.route.params.subscribe(
        params => this.actionType = params['type']
      );
      this.route.params.subscribe(
      params => this.skuid = params['id'],
      );
      this.globaldata.backurl = "Sku";   
      this.loadSkubyId();
      this.gettaxes();
      if(this.actionType == "editsize"){
        this.getsizes();
      }
      if(this.actionType == "editcolour"){
        this.getcolours();
        this.getcolourvariations();
      }
  }

  loadSkubyId(){
    this.body.skucode = this.skuid;
    this.service.getSku(this.body).subscribe(
      (res) => this.datasku = res.json()
      );
  }

  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

  save(){    
   if(this.validate()){
    this.service.putProducts(this.datasku).subscribe(
      (skuId: string) =>
      {
        this.loadsku.emit();
        this.router.navigateByUrl("/sku/dashboard");
      }
    )
  }
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
      //this.generateId();
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

  formatdata(){
    if(this.colour._id != null){
    this.datasku.colour = this.colour.name;
  }
  if(this.colourvariation._id != null){
    this.datasku.colourVariation = this.colourvariation.subname;
  }
  if(this.size._id != null){
    this.datasku.size = this.size.name;
  }
  if(this.tax._id != null){
    this.datasku.tax = this.tax.name;
  }
  }

  
  validate(): Boolean{
    this.formatdata();
    this.errorvalue = true;
    const count = 0;
    
    if(this.datasku.colour == null || 
    this.datasku.colourVariation == null || this.datasku.size == null 
    ||this.datasku.skuCode == null || this.datasku.actualColour == null
    || this.datasku.itemHeight == null || this.datasku.itemLength == null 
    || this.datasku.itemVolume == null
    || this.datasku.itemWeight == null || this.datasku.itemWidth == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }

 
  generateId(){
    if(this.actionType ="editcolour"){
    if(this.datasku.groupId != null && this.colour._id != null && this.colourvariation.subnameCode != null){
      this.datasku.styleCode = this.datasku.groupId + this.colour._id + this.colourvariation.subnameCode;
    }
    }
  
    if(this.actionType ="editsize"){
    if(this.datasku.styleCode != null && this.size._id){
      this.datasku.sizeCode =  this.datasku.styleCode + this.size._id;
    } 

    if(this.datasku.sizeCode != null && this.datasku.subBrand != null){
      this.datasku.skuCode = this.datasku.sizeCode + this.datasku.subBrand;
    }
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
    }
    if(this.datasku.b2cmargin != null){
      this.datasku.sellingPrice = this.costAfterOverHeadValue / (1-(this.datasku.b2cmargin/100));
    }
  }

  }

  volumetricWeightCalculaion(){
    if(this.datasku.packageHeight != null && this.datasku.packageLength != null &&
       this.datasku.packageWeight != null && this.datasku.packageWidth != null){
         this.datasku.volumetricWeight = (this.datasku.packageWidth* this.datasku.packageLength
                                         *this.datasku.packageHeight)/306;                             
       }
  }

  disableForRoles(){
    if(!this.keycloakservice.hasRole('Catalog')){
      document.getElementById("colour").setAttribute("disabled","true");
      document.getElementById("colour_variation").setAttribute("disabled","true");
      document.getElementById("size").setAttribute("disabled","true");
      document.getElementById("sku_description").setAttribute("disabled","true");
      document.getElementById("actual_colour").setAttribute("disabled","true");
      document.getElementById("item_weight").setAttribute("disabled","true");
      document.getElementById("item_length").setAttribute("disabled","true");
      document.getElementById("item_height").setAttribute("disabled","true");
      document.getElementById("item_width").setAttribute("disabled","true");
      document.getElementById("item_volume").setAttribute("disabled","true");
      document.getElementById("input_price").setAttribute("disabled","true");
      document.getElementById("branding").setAttribute("disabled","true");
      document.getElementById("fulfillment_price").setAttribute("disabled","true");
      document.getElementById("branding_quantity").setAttribute("disabled","true");
    }

    if(!this.keycloakservice.hasRole('Fulfillment')){
      document.getElementById("package_weight").setAttribute("disabled","true");
      document.getElementById("package_length").setAttribute("disabled","true");
      document.getElementById("package_height").setAttribute("disabled","true");
      document.getElementById("package_width").setAttribute("disabled","true");
      document.getElementById("fulfillment_cost").setAttribute("disabled","true");
    }

    if(!this.keycloakservice.hasRole('Sales')){
      document.getElementById("b2bmargin").setAttribute("disabled","true");
      document.getElementById("b2cmargin").setAttribute("disabled","true");
      document.getElementById("tax").setAttribute("disabled","true");
    }
  }

  setData(data: Sku): void{
    this.datasku = data;
  }

}
