import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { SharedModule } from './shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    {path: '', component: ForgetComponent}
];

@NgModule({
  imports: [
    NgbModule.forRoot(),
    RouterModule.forChild(routes), SharedModule
  ],
  declarations: [
    ForgetComponent
  ]
})
export class ForgetModule {}
