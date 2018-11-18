import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./category.component.css'],
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  category: Sku[];
  code: string;
  statusValue: any;
  create: Boolean;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.create = false;
    this.service.getCategory().subscribe(
      (res) => this.category = res.json()
    );
  }

  inactive(){}

  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
 
}
