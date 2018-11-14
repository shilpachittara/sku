import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-size.component.css'],
  selector: 'app-create-size',
  templateUrl: './create-size.component.html'
})
export class CreateSizeComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}