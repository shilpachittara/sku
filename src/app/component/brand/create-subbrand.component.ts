import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { Subcode } from '../../model/subcode';
import { AddSubcode } from '../../model/addsubcode';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-subbrand.component.css'],
  selector: 'app-create-subbrand',
  templateUrl: './create-subbrand.component.html'
})
export class CreateSubBrandComponent implements OnInit {

  @Input() subbrand: AddCode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.subbrand = new AddCode();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
     this.subbrand.db = "subbrand"
    this.service.postManage(this.subbrand).subscribe(
      (skuId: string) => { },
      errors => {
        this.errors = errors;
      })
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.subbrand.code == null || this.subbrand.name == null ){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}