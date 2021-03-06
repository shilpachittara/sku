import { Component, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddCode } from '../../model/addcode';
import { EventEmitter } from '@angular/core';

@Component({
    styleUrls   : ['./create-brand.component.css'],
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html'
})
export class CreateBrandComponent implements OnInit {

  @Input() brand: AddCode;
  @Output()
  loadbrand: EventEmitter<String> = new EventEmitter<String>();
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.brand = new AddCode();
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/management/brand");
  }

  save(){    
   if(this.validate()){
     this.brand.db = "brand";
    this.service.postManage(this.brand).subscribe(
      (res) =>
      {this.loadbrand.emit();},
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.brand.code == null || this.brand.name == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}