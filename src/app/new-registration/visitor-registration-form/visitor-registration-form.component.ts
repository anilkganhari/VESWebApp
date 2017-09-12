import { Component, OnInit, Input } from '@angular/core';
import { NewRegistration } from '../new-registration';
@Component({
  selector: 'visitor-registration-form',
  templateUrl: 'visitor-registration-form.component.html'
})

export class VisitorRegistrationComponent implements OnInit {
  @Input() visitor: NewRegistration;
  constructor() {

  }
  ngOnInit() { }
}
