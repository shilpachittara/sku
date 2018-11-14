import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { SkuService } from '../../service/sku.service';

@Component({
    styleUrls   : ['./sub-category.component.css'],
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html'
})
export class SubCategoryComponent implements OnInit {

  skudata: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: SkuService
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

}
