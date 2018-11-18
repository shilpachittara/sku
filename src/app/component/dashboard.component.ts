import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../model/sku';
import { AppGlobalDataService } from '../service/app-global-data.service';

@Component({
    styleUrls   : ['./dashboard.component.css'],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  skudata: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: SkuService, private globalService: AppGlobalDataService
  ) {}

  ngOnInit() { 
    this.service.getProducts().subscribe(
      (res) => this.skudata = res.json()
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

  inactive(){}

}
