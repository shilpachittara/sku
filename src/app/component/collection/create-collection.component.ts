import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';

@Component({
    styleUrls   : ['./create-collection.component.css'],
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html'
})
export class CreateCollectionComponent implements OnInit {

  @Input() collection: AddSubcode;
  errorvalue: any;
  errors: any;


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  ) {
    this.collection = new AddSubcode();
  }


  ngOnInit() {
  }


  save(){    
   if(this.validate()){
    this.collection.nameCode = this.globaldata.subcode.nameCode;
    this.collection.db = "collection";
    this.service.postManageSub(this.collection).subscribe(
      (subnameCode: string) =>
      {}
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.collection.name == null || this.collection.subname == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}