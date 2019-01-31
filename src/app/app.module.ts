import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { JsonpModule, HttpModule } from '@angular/http';
import { KeycloakHttp, KEYCLOAK_HTTP_PROVIDER } from './service/keycloak.http';
import { KeycloakService } from './service/keycloak.service';
import { SkuService } from './service/sku.service';
import { ManagementService } from './service/management.service';

const APP_ROUTES : Routes =
    [
       {path : 'forget' ,    loadChildren:'./forget.module#ForgetModule'},
       {path : 'login' ,    loadChildren:'./login.module#LoginModule'},
       {path: 'sku' , loadChildren:'./admin.module#AdminModule'},
       {path : '', redirectTo : '/login', pathMatch : 'full'}
      ];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    JsonpModule,
    HttpModule
  ],
  providers: [KEYCLOAK_HTTP_PROVIDER,KeycloakService,SkuService,ManagementService],
  bootstrap: [AppComponent]
})
export class AppModule {}
