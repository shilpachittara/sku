import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-tax.component.css'],
  selector: 'app-create-tax',
  templateUrl: './create-tax.component.html'
})
export class CreateTaxComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}