import { Routes } from '@angular/router';
import { NewResistrationComponent } from '../app/new-registration/new-registration.component';
import { AuthenticationComponent } from '../app/authentication/authentication.component';
import { ApprovedRequestsComponent } from '../app/approved-requests/approved-requests.component';
import { VisitingComponent } from '../app/visiting/visiting.component';
import { RouteGaurdService} from './route-gaurd.service';
export const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent,
    data: {}
  },
  {
    path: 'newRegistration',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Dashboard' }
  },
  {
    path: 'inprogress',
    component: VisitingComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Visiting' }
  },
  {
    path: 'approved',
    component: ApprovedRequestsComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Approvals' }
  },
  {
    path: 'history',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'History' }
  },
  {
    path: 'history',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Setttings' }
  },
  {
    path: 'history',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data: { title: 'Support' }
  },
  {
    path: '',
    component: NewResistrationComponent,
    canActivate: [RouteGaurdService],
    data : {}
  }
];

