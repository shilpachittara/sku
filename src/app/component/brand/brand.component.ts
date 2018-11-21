import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ManagementService } from '../../service/management.service';
import { Code } from '../../model/code';
import { Active } from '../../model/active';

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
  errors: any;

  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getManage().subscribe(
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
