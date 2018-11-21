import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';
import { Subcode } from '../../model/subcode';

@Component({
    styleUrls   : ['./tax.component.css'],
  selector: 'app-tax',
  templateUrl: './tax.component.html'
})
export class TaxComponent implements OnInit {

  tax: Subcode[];
  code: string;
  statusValue: any;
  data: Code;
  activedata: Active;
  errors: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getManage().subscribe(
      (res) => this.tax = res.json(),
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

status(data: Subcode):boolean{
  if(this.data.status == "1"){
    return true;
  }
  else{
  return false;
  }
}

inactive(data: Subcode){

  this.activedata.code = this.data.code;
  this.activedata.db = this.data.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )

}

active(data: Subcode){
  this.activedata.code = this.data.code;
  this.activedata.db = this.data.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )

}

}
