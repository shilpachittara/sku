import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-size.component.css'],
  selector: 'app-create-size',
  templateUrl: './create-size.component.html'
})
export class CreateSizeComponent implements OnInit {

  @Input() size: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.size = any;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/size");
  }

  save(){    
   if(this.validate()){
    this.service.postSize(this.size).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/size");
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