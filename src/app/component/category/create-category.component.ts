import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-category.component.css'],
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {


  @Input() category: AddCode;
  @Output()
  loadcategory: EventEmitter<String> = new EventEmitter<String>();
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.category = new AddCode();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
     this.category.db = "category";
    this.service.postManage(this.category).subscribe(
      (res) =>{
        this.loadcategory.emit();
      },
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.category.name == null || this.category.code == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}