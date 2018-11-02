import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { AppGlobalDataService } from '../service/app-global-data.service';

@Component({
    styleUrls   : ['./create.component.css'],
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  constructor (
    private router  : Router, private service: SkuService, private globalData: AppGlobalDataService
  ) {}

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

  save(){
    this.service.postProducts(this.globalData.sku).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/dashboard");
      }
    )
  }

}
