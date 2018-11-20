import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-gender.component.css'],
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html'
})
export class CreateGenderComponent implements OnInit {

  @Input() gender: AddCode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.gender = new AddCode();
  }

  ngOnInit() {
  }


  save(){    
   if(this.validate()){
     this.gender.db = "gender"
    this.service.postManage(this.gender).subscribe(
      (name: string) =>
      {}
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.gender.name == null || this.gender.code == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}