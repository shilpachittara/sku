import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-colourvariation.component.css'],
  selector: 'app-create-colourvariation',
  templateUrl: './create-colourvariation.component.html'
})
export class CreateColourVariationComponent implements OnInit {
  
  @Input() colourvariation: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.colourvariation = any;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/colourvariation");
  }

  save(){    
   if(this.validate()){
    this.service.postColourVariation(this.colourvariation).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/colourvariation");
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