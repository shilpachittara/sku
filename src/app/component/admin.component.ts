import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    styleUrls   : ['./admin.component.css'],
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  constructor (
    private router               : Router
  ) {}

  ngOnInit() {
  }

}
