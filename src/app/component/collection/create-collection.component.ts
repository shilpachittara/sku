import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';
import { Subcode } from '../../model/subcode';
import { Code } from '../../model/code';

@Component({
    styleUrls   : ['./create-collection.component.css'],
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html'
})
export class CreateCollectionComponent implements OnInit {

  @Input() collection: AddSubcode;
  dropDown: Subcode;
  errorvalue: any;
  errors: any;
  brands: Code [];
  brand: Code;


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  ) {
    this.collection = new AddSubcode();
    this.dropDown = new Subcode();
  }


  ngOnInit() {
    this.dropDown.db = "brand";
    this.service.getDropDown(this.dropDown).subscribe(
      (res) => this.brands = res.json()
      )
  }


  save(){    
   if(this.validate()){
    this.collection.nameCode = this.brand._id;
    this.collection.name = this.brand.name;
    this.collection.db = "collection";
    this.service.postManageSub(this.collection).subscribe(
      (subnameCode: string) =>
      {},
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.brand.name == null || this.brand._id == null||
       this.collection.subname == null || this.collection.subnameCode){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}