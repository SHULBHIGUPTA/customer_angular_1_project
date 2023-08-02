import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import {RouterModule} from '@angular/router';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';


@NgModule({
  declarations: [
    SupplierComponent  
  ],
  imports: [
    RouterModule.forChild(SupplierRoutes),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
