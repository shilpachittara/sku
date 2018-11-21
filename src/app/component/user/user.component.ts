import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Sku } from '../../model/sku';
import { ManagementService } from '../../service/management.service';
import { User } from '../../model/user';

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

  constructor (
    private router: Router, private service: ManagementService
  ) {}

  ngOnInit() { 
    this.service.getUser().subscribe(
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
