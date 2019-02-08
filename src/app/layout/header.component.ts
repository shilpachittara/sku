import { Component, OnInit } from '@angular/core';
import { AppGlobalDataService } from '../service/app-global-data.service';
import { Router } from '@angular/router';
import { KeycloakService } from '../service/keycloak.service';


@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   backvalue: string;
   constructor(private router  : Router,private globaldata: AppGlobalDataService, private keyCloak: KeycloakService) { }
   ngOnInit() {
    if(this.globaldata.backurl == "Sku"){
        this.backvalue = "SKU Manager";
    }
    if(this.globaldata.backurl == "management"){
        this.backvalue = "Management";
       }
   }
   back(){
       if(this.globaldata.backurl == "Sku"){
       this.router.navigateByUrl("/sku/dashboard");
       }
       if(this.globaldata.backurl == "management"){
        this.router.navigateByUrl("/sku/management");
       }
   }
   logout(){
       this.keyCloak.logout();
   }
}