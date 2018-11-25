import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../model/sku';
import { AppGlobalDataService } from '../service/app-global-data.service';
import { Code } from '../model/code';
import { Active } from '../model/active';
import { AddCode } from '../model/addcode';
import { ManagementService } from '../service/management.service';

@Component({
    styleUrls   : ['./dashboard.component.css'],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  skudata: Sku[];
  code: string;
  statusValue: any;
  errors: any;
  activedata: Active;
  postdata: AddCode;
  constructor (
    private router: Router, private service: SkuService, private globalService: AppGlobalDataService,
    private manageservice: ManagementService
  ) {}

  ngOnInit() { 
    this.globalService.backurl = "no";
    this.loadSku();
  }

  loadSku(){
    this.service.getProducts().subscribe(
      (res) => this.skudata = res.json(),
      errors => {
        this.errors = errors;
      }
    );
  }

  getstatus(sku: Sku){
    var value = sku.status;
    value = value + "%";
    document.getElementById("status_bar").style.width = value;
  }

  action(data: Sku, type: string){
    this.globalService.sku = data;
    this.globalService.actionType = type;
    this.router.navigateByUrl("/sku/dashboard/action");
  }

/*  status():boolean{
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
  }*/

}
