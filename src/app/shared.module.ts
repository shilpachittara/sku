import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { AppModule } from './app.module';
import { FooterComponent } from './layout/footer.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModalModule 
  ],
  declarations: [
    FooterComponent
  ],
  providers: [NgbModal],  
  exports: [FooterComponent]

})
export class SharedModule {}
