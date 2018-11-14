import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-colour.component.css'],
  selector: 'app-create-colour',
  templateUrl: './create-colour.component.html'
})
export class CreateColourComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}