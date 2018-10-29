import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppModule } from './app.module';
import { SharedModule } from './shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
      NgbModule.forRoot(),
    RouterModule.forChild(routes), SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {}
