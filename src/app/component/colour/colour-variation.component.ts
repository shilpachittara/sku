import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { Subcode } from '../../model/subcode';
import { Active } from '../../model/active';
import { Code } from '../../model/code';

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
  
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getManage().subscribe(
      (res) => this.colourvariation = res.json()
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

  this.activedata.code = this.data.subnameCode;
  this.activedata.db = this.data.db;
  this.service.postInactive(this.activedata).subscribe(
    (code: string) =>{}    )

}

active(data: Subcode){
  this.activedata.code = this.data.subnameCode;
  this.activedata.db = this.data.db;
  this.service.postActive(this.activedata).subscribe(
    (code: string) =>{}    )

}
}
