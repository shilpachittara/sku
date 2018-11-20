import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-size.component.css'],
  selector: 'app-create-size',
  templateUrl: './create-size.component.html'
})
export class CreateSizeComponent implements OnInit {

  @Input() size: AddCode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.size = new AddCode();
  }

  ngOnInit() {
  }


  save(){    
   if(this.validate()){
     this.size.db = "size"
    this.service.postManage(this.size).subscribe(
      (name: string) =>
      { }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.size.name == null || this.size.code == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}