import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';
import { Subcode } from '../../model/subcode';
import { Code } from '../../model/code';

@Component({
    styleUrls   : ['./create-subcategory.component.css'],
  selector: 'app-create-subcategory',
  templateUrl: './create-subcategory.component.html'
})
export class CreateSubCategoryComponent implements OnInit {

  @Input() subcategory: AddSubcode;
  dropDown: Subcode;
  errorvalue: any;
  errors: any;
  categories: Code [];
  category: Code;


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  ) {
    this.subcategory = new AddSubcode();
    this.dropDown = new Subcode();
  }

  ngOnInit() {
    this.dropDown.db = "category";
    this.service.getDropDown(this.dropDown).subscribe(
      (res) => this.categories = res.json()
      )
  }
  
  save(){    
   if(this.validate()){
     this.subcategory.db = "subcategory";
     this.subcategory.nameCode = this.category._id;
     this.subcategory.name = this.category.name;
    this.service.postManageSub(this.subcategory).subscribe(
      (nameCode: string) =>{},
      errors => {
        this.errors = errors;
      })
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.category.name == null || this.category._id == null ||
      this.subcategory.subname == null || this.subcategory.subnameCode == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;
  }

}