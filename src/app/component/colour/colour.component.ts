import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./colour.component.css'],
  selector: 'app-colour',
  templateUrl: './colour.component.html'
})
export class ColourComponent implements OnInit {

  colour: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getColour().subscribe(
      (res) => this.colour = res.json()
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
