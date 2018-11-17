import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-colour.component.css'],
  selector: 'app-create-colour',
  templateUrl: './create-colour.component.html'
})
export class CreateColourComponent implements OnInit {

  @Input() colour: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.colour = any;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/colour");
  }

  save(){    
   if(this.validate()){
    this.service.postColour(this.colour).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/colour");
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