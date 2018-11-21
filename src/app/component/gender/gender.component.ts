import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./gender.component.css'],
  selector: 'app-gender',
  templateUrl: './gender.component.html'
})
export class GenderComponent implements OnInit {

  gender: Code[];
  code: string;
  statusValue: any;
  data: Code;
  activedata: Active;
  errors: any;
  postdata: AddCode;
  
  constructor (
    private router: Router, private service: ManagementService
  ) {
    this.postdata = new AddCode();
  }

  ngOnInit() { 
    this.postdata.db = "gender";
    this.service.getManage(this.postdata).subscribe(
      (res) => this.gender = res.json(),
      errors => {
        this.errors = errors;
      }
    );
  }


  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

status(data: Code):boolean{
  if(data.status == "1"){
    return true;
  }
  else{
  return false;
  }
}

inactive(data: Code){

  this.activedata.code = data.code;
  this.activedata.db = data.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )

}

active(data: Code){
  this.activedata.code = this.data.code;
  this.activedata.db = this.data.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )

}

}
