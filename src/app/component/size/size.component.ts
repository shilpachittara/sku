import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { SkuService } from '../../service/sku.service';

@Component({
    styleUrls   : ['./size.component.css'],
  selector: 'app-size',
  templateUrl: './size.component.html'
})
export class SizeComponent implements OnInit {

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

}
