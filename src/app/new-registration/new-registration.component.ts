import { Component, OnInit } from '@angular/core';
import { NewRegistration, ClientTypeEnum, VisitorTypeEnum } from './new-registration';
@Component({
  selector: 'new-registration',
  templateUrl: 'new-registration.component.html'
})

export class NewResistrationComponent implements OnInit {

  newVisitor: NewRegistration;
  clientTypeEnum = ClientTypeEnum;
  visitorTypeEnum = VisitorTypeEnum;
  constructor() {
    this.newVisitor = new NewRegistration();
  }

  ngOnInit() { }
}
