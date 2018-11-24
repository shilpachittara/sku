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
    styleUrls   : ['./size.component.css'],
  selector: 'app-size',
  templateUrl: './size.component.html'
})
export class SizeComponent implements OnInit {

  size: Code[];
  code: string;
  statusValue: any;
  data: Code;
  activedata: Active;
  errors: any;
  postdata: AddCode;
  
  constructor (
    private router: Router, private service: ManagementService,
    private globaldata: AppGlobalDataService
  ) {
    this.postdata = new AddCode();
    this.activedata = new Active();
  }

  ngOnInit() { 
    this.globaldata.backurl = "management";
    this.loadSize();
  }

  loadSize() {
    this.postdata.db = "size";
    this.service.getManage(this.postdata).subscribe(
      (res) => this.size = res.json(),
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
  this.activedata.db = this.postdata.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )

}

active(data: Code){
  this.activedata.code = data.code;
  this.activedata.db = this.postdata.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )

}

}
