import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-subbrand.component.css'],
  selector: 'app-create-subbrand',
  templateUrl: './create-subbrand.component.html'
})
export class CreateSubBrandComponent implements OnInit {

  @Input() subbrand: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.subbrand = any;
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
    this.service.postSubBrand(this.subbrand).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/subbrand");
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