import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-category.component.css'],
  selector: 'app-create-category',
  templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}