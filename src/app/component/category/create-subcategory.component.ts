import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-subcategory.component.css'],
  selector: 'app-create-subcategory',
  templateUrl: './create-subcategory.component.html'
})
export class CreateSubCategoryComponent implements OnInit {

  @Input() subcategory: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.subcategory = any;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/subcategory");
  }

  save(){    
   if(this.validate()){
    this.service.postSubCategory(this.subcategory).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/subcategory");
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