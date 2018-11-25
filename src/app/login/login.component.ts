import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor (
    private router               : Router
  ) {}

  ngOnInit() {
  }

  login(){
    // TO DO
    // login logic
    this.router.navigateByUrl("/sku")
  }

  forget(){
    this.router.navigateByUrl("/forget");
  }
}
