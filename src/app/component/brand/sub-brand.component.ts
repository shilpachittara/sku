import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./sub-brand.component.css'],
  selector: 'app-sub-brand',
  templateUrl: './sub-brand.component.html'
})
export class SubBrandComponent implements OnInit {

  subbrand: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getSubBrand().subscribe(
      (res) => this.subbrand = res.json()
    );
  }

}
