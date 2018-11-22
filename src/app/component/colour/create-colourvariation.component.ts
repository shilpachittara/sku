import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';

@Component({
    styleUrls   : ['./create-colourvariation.component.css'],
  selector: 'app-create-colourvariation',
  templateUrl: './create-colourvariation.component.html'
})
export class CreateColourVariationComponent implements OnInit {
  
  @Input() colourvariation: AddSubcode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  )  {
    this.colourvariation = new AddSubcode();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
    //this.colourvariation.nameCode = this.globaldata.subcode.nameCode; // TO DO
    this.colourvariation.db = "colourvariation";
    this.service.postManageSub(this.colourvariation).subscribe(
      (subnameCode: string) =>
      {},
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.colourvariation.name == null || this.colourvariation.subname == null 
      || this.colourvariation.subnameCode == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}