import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { DbLogger } from '../Utility/CustomerApp.Logger';
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj: DbLogger;
  Disable:boolean = false;
  constructor(_injector: Injector, public http:HttpClient) {
    this.Logobj = _injector.get("1");
    this.Logobj.DbLog();
  }
  // SelectCustomer(customer: Customer) {
  //   this.CustomerModel = customer;
  // }
  PostServer() {
    //create a light weight DTO Data transfer object
    this.Disable = true;
    var custdto:any = {};
    custdto.CustomerCode = this.CustomerModel.CustomerCode;
    custdto.CustomerName = this.CustomerModel.CustomerName;
    custdto.CustomerAmount = this.CustomerModel.CustomerAmount;
    this.http.post("http://localhost:3000/Customers", 
    custdto).subscribe(res => this.Success(res), res => this.Error(res));
    
  }
  GetFromServer() {
    this.http.get("http://localhost:3000/Customers").
    subscribe(res => this.SuccessGet(res), res => this.Error(res));
    

  }
  Error(res:any) {
    console.debug(res.json());
  }
  Success(res:any) {
    this.GetFromServer();
  }
  SuccessGet(data:any){
    this.CustomerModels = data;
    this.Disable = false;
    this.CustomerModel = new Customer();
  }
 
  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clear UI
  }
  hasError(typeofvalidator:string, controlname: string): boolean {
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator)
  }
}
