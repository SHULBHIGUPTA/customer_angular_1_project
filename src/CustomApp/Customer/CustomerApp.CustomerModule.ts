import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from '../Home/CustomerApp.MasterPageComponent';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
// import { GridComponent } from '../Utility/CustomerApp.GridComponents';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';


@NgModule({
  declarations: [
    CustomerComponent 
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: MyInterceptor, multi:true}
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
