import { Component, OnInit } from '@angular/core';
import { NewRegistration, ClientTypeEnum, VisitorTypeEnum } from './new-registration';
import { Store, Reducer, Action } from './new-registration-store.service';
@Component({
  selector: 'new-registration',
  templateUrl: 'new-registration.component.html'
})

export class NewResistrationComponent implements OnInit {

  newVisitor: NewRegistration;
  clientTypeEnum = ClientTypeEnum;
  visitorTypeEnum = VisitorTypeEnum;
  store: any;
  reducer: Reducer<NewRegistration> = (state: NewRegistration, action: Action) => {
    return state;
  }

  constructor() {
    this.store = new Store<NewRegistration>(this.reducer, new NewRegistration());
   this.newVisitor = this.store.getState();
  }
  ngOnInit() { }
}
