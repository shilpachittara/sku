import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
   selector: 'app-forget',
   templateUrl: './forget.component.html'
})

export class ForgetComponent implements OnInit {
   constructor(
    private router               : Router
   ) { }
   ngOnInit() {}
   home(){
       this.router.navigateByUrl("/login");
   }
}