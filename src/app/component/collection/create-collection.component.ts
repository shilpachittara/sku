import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./create-collection.component.css'],
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html'
})
export class CreateCollectionComponent implements OnInit {

  @Input() collection: any;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    //this.collection = any;
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/collection");
  }

  save(){    
   if(this.validate()){
    this.service.postCollection(this.collection).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/collection");
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