import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';
import { Subcode } from '../../model/subcode';

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


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  ) {
    this.subcategory = new AddSubcode();
  }

  ngOnInit() {
  }
  
  save(){    
   if(this.validate()){
     this.subcategory.db = "subcategory";
     this.subcategory.nameCode = this.globaldata.code.code;
    this.service.postManageSub(this.subcategory).subscribe(
      (nameCode: string) =>{})
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.subcategory.name == null || this.subcategory.subname || this.subcategory.subnameCode){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}