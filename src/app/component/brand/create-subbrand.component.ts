import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-subbrand.component.css'],
  selector: 'app-create-subbrand',
  templateUrl: './create-subbrand.component.html'
})
export class CreateSubBrandComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}