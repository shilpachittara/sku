import { Component, OnInit } from '@angular/core';

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
  errorvalue: any;
  errors: any;
  role: any;
  roleAdmin: boolean;


  constructor (
    private router  : Router, private service: ManagementService
  ) {
    this.user = new User();
  }

  ngOnInit() {
  }

  save(){    
   if(this.validate()){
    this.service.postUser(this.user).subscribe(
      (skuId: string) =>
      {
        console.log('posting data');
        this.router.navigateByUrl("/sku/management/user");
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
     
    if(null){
      //TO DO Condition
      this.errors = "Please fill all the required fields";
      this.errorvalue = false;
    }
    return this.errorvalue;

  }
}