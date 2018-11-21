import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./category.component.css'],
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  category: Code[];
  code: string;
  statusValue: any;
  create: Boolean;
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
    this.create = false;
    this.postdata.db = "collection";
    this.service.getCollection(this.postdata).subscribe(
      (res) => this.category = res.json(),
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
  if(this.data.status == "1"){
    return true;
  }
  else{
  return false;
  }
}


inactive(data: Code){

  this.activedata.code = this.data.code;
  this.activedata.db = this.data.db;
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
