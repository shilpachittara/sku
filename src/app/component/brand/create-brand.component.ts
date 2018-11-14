import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-brand.component.css'],
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html'
})
export class CreateBrandComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}