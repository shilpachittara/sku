import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AppGlobalDataService } from '../service/app-global-data.service';

@Component({
    styleUrls   : ['./management.component.css'],
  selector: 'app-management',
  templateUrl: './management.component.html'
})
export class ManagementComponent implements OnInit {
  constructor (  private globalService: AppGlobalDataService,
    private router               : Router
  ) {}

  ngOnInit() {
    this.globalService.backurl = "no";
  }

}
