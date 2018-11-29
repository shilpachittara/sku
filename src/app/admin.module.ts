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
import { CategoryComponent } from './component/category/category.component';
import { SubCategoryComponent } from './component/category/sub-category.component';
import { BrandComponent } from './component/brand/brand.component';
import { SubBrandComponent } from './component/brand/sub-brand.component';
import { CollectionComponent } from './component/collection/collection.component';
import { ColourComponent } from './component/colour/colour.component';
import { ColourVariationComponent } from './component/colour/colour-variation.component';
import { GenderComponent } from './component/gender/gender.component';
import { SizeComponent } from './component/size/size.component';
import { TaxComponent } from './component/tax/tax.component';
import { CreateCategoryComponent } from './component/category/create-category.component';
import { CreateSubCategoryComponent } from './component/category/create-subcategory.component';
import { CreateBrandComponent } from './component/brand/create-brand.component';
import { CreateSubBrandComponent } from './component/brand/create-subbrand.component';
import { CreateCollectionComponent } from './component/collection/create-collection.component';
import { CreateColourComponent } from './component/colour/create-colour.component';
import { CreateGenderComponent } from './component/gender/create-gender.component';
import { CreateSizeComponent } from './component/size/create-size.component';
import { CreateTaxComponent } from './component/tax/create-tax.component';
import { CreateColourVariationComponent } from './component/colour/create-colourvariation.component';
import { ManagementService } from './service/management.service';
import { ActionComponent } from './component/action.component';
import { UserComponent } from './component/user/user.component';
import { CreateUserComponent } from './component/user/create-user.component';

const routes: Routes = [
    {path: '', component: AdminComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/create', component: CreateComponent},
    {path: 'dashboard/action/:type/:id', component: ActionComponent},
    {path: 'dashboard/action', component: ActionComponent},
    {path: 'management', component: ManagementComponent},
    {path: 'management/category', component: CategoryComponent},
    {path: 'management/subcategory', component: SubCategoryComponent},
    {path: 'management/brand', component: BrandComponent},
    {path: 'management/subbrand', component: SubBrandComponent},
    {path: 'management/collection', component: CollectionComponent},
    {path: 'management/colour', component: ColourComponent},
    {path: 'management/colourvariation', component: ColourVariationComponent},
    {path: 'management/gender', component: GenderComponent},
    {path: 'management/size', component: SizeComponent},
    {path: 'management/tax', component: TaxComponent},
    {path: 'management/user', component: UserComponent}
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
      ManagementComponent,
      CategoryComponent,
      SubCategoryComponent,
      BrandComponent,
      SubBrandComponent,
      CollectionComponent,
      ColourComponent,
      ColourVariationComponent,
      GenderComponent,
      SizeComponent,
      TaxComponent,
      UserComponent,
      CreateCategoryComponent,
      CreateSubCategoryComponent,
      CreateBrandComponent,
      CreateSubBrandComponent,
      CreateCollectionComponent,
      CreateColourComponent,
      CreateColourVariationComponent,
      CreateGenderComponent,
      CreateSizeComponent,
      CreateTaxComponent,
      CreateUserComponent,
      ActionComponent
  ],
  providers: [SkuService, AppGlobalDataService, ManagementService]
})
export class AdminModule {}
