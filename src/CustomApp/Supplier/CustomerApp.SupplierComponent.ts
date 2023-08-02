import { Component, Injector } from '@angular/core';
import { FileLogger } from '../Utility/CustomerApp.Logger';


@Component({
  templateUrl: './SupplierView.html'
})
export class SupplierComponent {
Logobj:FileLogger;
constructor(_injector:Injector) {
  this.Logobj = _injector.get("2");
  this.Logobj.FileLog()
}
}
