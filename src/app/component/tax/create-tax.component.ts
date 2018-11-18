import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-tax.component.css'],
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html'
})
export class CreateTaxComponent implements OnInit {

  @Input() tax: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.tax = any;
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
    this.service.postTax(this.tax).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/tax");
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(null){
      //TO DO Condition
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}