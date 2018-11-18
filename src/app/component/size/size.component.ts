import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./size.component.css'],
  selector: 'app-size',
  templateUrl: './size.component.html'
})
export class SizeComponent implements OnInit {

  size: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getSize().subscribe(
      (res) => this.size = res.json()
    );
  }

  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

}
