import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';
import { AddCode } from '../../model/addcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';

@Component({
    styleUrls   : ['./brand.component.css'],
  selector: 'app-brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent implements OnInit {

  brand: Code[];
  code: string;
  statusValue: any;
  data: Code;
  activedata: Active;
  postdata: AddCode;
  errors: any;
  
  constructor (
    private router: Router, private service: ManagementService,
    private globaldata: AppGlobalDataService
  ) {
    this.postdata = new AddCode();
    this.activedata = new Active();
  }

  ngOnInit() { 
    this.globaldata.backurl = "management";
    this.loadBrand();
  }

  loadBrand() {
    this.postdata.db = "brand";
    this.service.getManage(this.postdata).subscribe(
      (res) => this.brand = res.json(),
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

