import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-colour.component.css'],
  selector: 'app-create-colour',
  templateUrl: './create-colour.component.html'
})
export class CreateColourComponent implements OnInit {

  @Input() colour: AddCode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.colour = new AddCode();
  }

  ngOnInit() {
  }


  save(){    
   if(this.validate()){
    this.colour.db = "colour";
    this.service.postManage(this.colour).subscribe(
      (skuId: string) =>
      { }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.colour.code == null || this.colour.name == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}