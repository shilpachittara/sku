import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { SharedModule } from './shared.module';
import { HeaderComponent } from './layout/header.component';
import { AdminComponent } from './component/admin.component';
import { DashboardComponent } from './component/dashboard.component';
import { CreateComponent } from './component/create.component';
import { SkuService } from './service/sku.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppGlobalDataService } from './service/app-global-data.service';
import { ManagementComponent } from './component/management.component';

const routes: Routes = [
    {path: '', component: AdminComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/create', component: CreateComponent},
    {path: 'management', component: ManagementComponent}
];

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
      AdminComponent,
      DashboardComponent,
      CreateComponent,
      HeaderComponent,
      ManagementComponent
  ],
  providers: [SkuService, AppGlobalDataService]
})
export class AdminModule {}
