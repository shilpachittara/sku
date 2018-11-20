import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';

@Component({
    styleUrls   : ['./create-tax.component.css'],
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html'
})
export class CreateTaxComponent implements OnInit {

  @Input() tax: AddSubcode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.tax = new AddSubcode();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
     this.tax.db = "tax";
    this.service.postManageSub(this.tax).subscribe(
      (skuId: string) =>
      {}
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.tax.name == null || this.tax.nameCode == null || this.tax.subname == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}