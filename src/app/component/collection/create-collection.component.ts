import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
    styleUrls   : ['./create-collection.component.css'],
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html'
})
export class CreateCollectionComponent implements OnInit {


  constructor (
    private router  : Router
  ) {
  }

  ngOnInit() {
  }
}