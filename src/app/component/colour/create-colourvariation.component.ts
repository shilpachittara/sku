import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-colourvariation.component.css'],
  selector: 'app-create-category',
  templateUrl: './create-colourvariation.component.html'
})
export class CreateColourVariationComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}