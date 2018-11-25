import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./create-tax.component.css'],
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html'
})
export class CreateTaxComponent implements OnInit {

  @Input() tax: AddCode;
  @Output()
  loadtax: EventEmitter<String> = new EventEmitter<String>();
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.tax = new AddCode();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
     this.tax.db = "tax";
    this.service.postManage(this.tax).subscribe(
      (res) =>
      { this.loadtax.emit(); },
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.tax.name == null || this.tax.code == null ){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}