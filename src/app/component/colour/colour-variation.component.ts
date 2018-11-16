import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./colour-variation.component.css'],
  selector: 'app-colour-variation',
  templateUrl: './colour-variation.component.html'
})
export class ColourVariationComponent implements OnInit {

  colourvariation: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getColourVariation().subscribe(
      (res) => this.colourvariation = res.json()
    );
  }

}
