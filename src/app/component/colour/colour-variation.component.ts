import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Subcode } from '../../model/subcode';
import { Active } from '../../model/active';
import { Code } from '../../model/code';
import { AddCode } from '../../model/addcode';

@Component({
    styleUrls   : ['./colour-variation.component.css'],
  selector: 'app-colour-variation',
  templateUrl: './colour-variation.component.html'
})
export class ColourVariationComponent implements OnInit {

  colourvariation: Subcode[];
  code: string;
  statusValue: any;
  data: Subcode;
  activedata: Active;
  errors: any;
  postdata: AddCode;
  
  constructor (
    private router: Router, private service: ManagementService
  ) {
    this.postdata = new AddCode();
  }

  ngOnInit() { 
    this.postdata.db = "colorvariation";
    this.service.getManage(this.postdata).subscribe(
      (res) => this.colourvariation = res.json(),
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
  if(data.status == "1"){
    return true;
  }
  else{
  return false;
  }
}

inactive(data: Subcode){

  this.activedata.code = data.subnameCode;
  this.activedata.db = data.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )

}

active(data: Subcode){
  this.activedata.code = data.subnameCode;
  this.activedata.db = data.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )

}
}
