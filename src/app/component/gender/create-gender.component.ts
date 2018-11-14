import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-gender.component.css'],
  selector: 'app-create-gender',
  templateUrl: './create-gender.component.html'
})
export class CreateGenderComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}