import { Component, OnInit, Input } from '@angular/core';
import { NewRegistration } from '../new-registration';
import { Router } from '@angular/router';
@Component({
  selector: 'visitor-registration-form',
  templateUrl: 'visitor-registration-form.component.html'
})

export class VisitorRegistrationComponent implements OnInit {
  @Input() visitor: NewRegistration;
  constructor(private _router: Router) {

  }

  createNewRequest(): void {
    this._router.navigateByUrl('/inprogress');
  }
  ngOnInit() { }
}
