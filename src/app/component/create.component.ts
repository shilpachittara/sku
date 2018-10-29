import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
    styleUrls   : ['./create.component.css'],
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  constructor (
    private router  : Router
  ) {}

  ngOnInit() {
  }
  back(){
    this.router.navigateByUrl("/sku/dashboard");
  }

}
