import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-gender.component.css'],
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html'
})
export class CreateGenderComponent implements OnInit {

  @Input() gender: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.gender = any;
  }

  ngOnInit() {
  }


  save(){    
   if(this.validate()){
    this.service.postGender(this.gender).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/gender");
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