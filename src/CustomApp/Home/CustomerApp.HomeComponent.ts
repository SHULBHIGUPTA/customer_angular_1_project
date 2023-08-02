import { Component } from '@angular/core';
import { BaseLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.Homeview.html'
})
export class HomeComponent {
  Logobj: BaseLogger;
  constructor(_logger: BaseLogger) {
    this.Logobj = _logger;
    this.Logobj.Log();
  }
}
