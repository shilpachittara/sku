import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    styleUrls   : ['./management.component.css'],
  selector: 'app-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent implements OnInit {
  constructor (
    private router               : Router
  ) {}

  ngOnInit() {
  }

}
