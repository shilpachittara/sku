import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ManagementService } from '../../service/management.service';
import { User } from '../../model/user';

@Component({
    styleUrls   : ['./create-user.component.css'],
  selector: 'app-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {

  @Input() user: User;
  @Output()
  loaduser: EventEmitter<String> = new EventEmitter<String>();
  errorvalue: any;
  errors: any;
  role: any;
  roleAdmin: boolean;
  regexEmail   = /^([a-zA-Z0-9_\-]+)(\.[a-zA-Z0-9_\-]+)*@[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*\.([a-zA-Z]{2,5})$/;
    


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
     this.user.db = "user";
    this.service.postUser(this.user).subscribe(
      (res) =>
      { this.loaduser.emit()},
      errors => {
        this.errors = errors;
      }
    )
  }
  }

  admin(){
    if(this.user.role == "admin"){
      this.roleAdmin = true;
    }
    else{
      this.roleAdmin = false;
    }
  }

  validate(): Boolean{
    this.errorvalue = true;
    const count = 0;
     
    if(this.user.mail != null){
      if(!this.isValidEmail(this.user.mail)){
      this.errors = "Please enter valid email";
      this.errorvalue = false;
      }
    }
    if(this.user.role == "admin" && this.user.password == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    if(this.user.role == null || this.user.mail == null){
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }

  isValidEmail(email: string): boolean {
    return this.regexEmail.test(email);
}
}