import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';

@Component({
    styleUrls   : ['./gender.component.css'],
  selector: 'app-gender',
  templateUrl: './gender.component.html'
})
export class GenderComponent implements OnInit {

  gender: Sku[];
  code: string;
  statusValue: any;
  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getGender().subscribe(
      (res) => this.gender = res.json()
    );
  }

}
