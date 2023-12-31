import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import {RouterModule} from '@angular/router';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger, FileLogger } from '../Utility/CustomerApp.Logger';

var providerscoll:any = [];
//http call get this from the server
providerscoll.push({provide: "1", useClass: DbLogger});
providerscoll.push({provide: "2", useClass: FileLogger});
providerscoll.push({provide:BaseLogger, useClass: ConsoleLogger});

@NgModule({
  declarations: [
     MasterPageComponent,
     HomeComponent 
     ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule{ }
