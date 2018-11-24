import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { AddSubcode } from '../../model/addsubcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';
import { Subcode } from '../../model/subcode';
import { Code } from '../../model/code';

@Component({
    styleUrls   : ['./create-colourvariation.component.css'],
  selector: 'app-create-colourvariation',
  templateUrl: './create-colourvariation.component.html'
})
export class CreateColourVariationComponent implements OnInit {
  
  @Input() colourvariation: AddSubcode;
  @Output()
  loadcolourvariation: EventEmitter<String> = new EventEmitter<String>();
  dropDown: Subcode;
  errorvalue: any;
  errors: any;
  colours: Code [];
  colour: Code;


  constructor (
    private router  : Router, private service: ManagementService, private globaldata: AppGlobalDataService
  )  {
    this.colourvariation = new AddSubcode();
    this.dropDown = new Subcode();
  }

  ngOnInit() {
    this.dropDown.db = "colour";
    this.service.getDropDown(this.dropDown).subscribe(
      (res) => this.colours = res.json()
      )
  }

  save(){    
   if(this.validate()){
    this.colourvariation.nameCode = this.colour._id;
    this.colourvariation.name = this.colour.name;
    this.colourvariation.db = "colourvariation";
    this.service.postManageSub(this.colourvariation).subscribe(
      (res) =>
      {this.loadcolourvariation.emit();},
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.colour.name == null || this.colour._id == null ||
       this.colourvariation.subname == null || this.colourvariation.subnameCode == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}