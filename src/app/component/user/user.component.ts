import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { User } from '../../model/user';
import { AddCode } from '../../model/addcode';
import { AppGlobalDataService } from '../../service/app-global-data.service';

@Component({
    styleUrls   : ['./user.component.css'],
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  user: User[];
  code: string;
  statusValue: any;
  data: User;
  errors: any;
  postdata: AddCode;
  p: number = 1;
  skuPerPage: number;
  
  constructor (
    private router: Router, private service: ManagementService,
    private globaldata: AppGlobalDataService
  ) {
    this.postdata = new AddCode();
  }

  ngOnInit() { 
    this.skuPerPage = 10;
    this.globaldata.backurl = "management";
    this.loadUser();
  }

  loadUser() {
    this.postdata.db = "user";
    this.service.getUser(this.postdata).subscribe(
      (res) => this.user = res.json(),
      errors => {
        this.errors = errors;
      }
    );
  }

  myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

remove(user: User){
  user.db = "user";
this.service.deleteUser(user).subscribe(
  (code: string) =>{}    )
}

}
