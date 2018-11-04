import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SkuService } from '../service/sku.service';
import { Sku } from '../model/sku';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create.component.css'],
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  @Input() datasku : Sku;
  master: string;
  constructor (
    private router  : Router, private service: SkuService
  ) {
    this.datasku = new Sku();
  }

  ngOnInit() {
  }

  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

  save(){
    this.service.postProducts(this.datasku).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/dashboard");
      }
    )
  }

  setData(data: Sku): void{
    this.datasku = data;
  }

}
