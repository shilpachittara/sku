import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-subcategory.component.css'],
  selector: 'app-create-subcategory',
  templateUrl: './create-subcategory.component.html'
})
export class CreateSubCategoryComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}