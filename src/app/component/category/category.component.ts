import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';
import { AddCode } from '../../model/addcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';

@Component({
    styleUrls   : ['./category.component.css'],
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  category: Code[];
  code: string;
  statusValue: any;
  data: Code;
  activedata: Active;
  errors: any;
  postdata: AddCode;
  p: number = 1;
  skuPerPage: number;
  
  constructor (
    private router: Router, private service: ManagementService,
    private globaldata: AppGlobalDataService
  ) {
    this.postdata = new AddCode();
    this.activedata = new Active();
  }

  ngOnInit() { 
    this.skuPerPage = 10;
    this.globaldata.backurl = "management";
    this.loadCategory();
  }

  loadCategory() {
    this.postdata.db = "category";
    this.service.getManage(this.postdata).subscribe(
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
  if(data.status == "1"){
    return true;
  }
  else{
  return false;
  }
}


inactive(data: Code){
  this.activedata.code = data._id;
  this.activedata.db = this.postdata.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )
}

active(data: Code){
  this.activedata.code = data._id;
  this.activedata.db = this.postdata.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )
}
}
