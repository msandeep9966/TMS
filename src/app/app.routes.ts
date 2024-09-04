import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { DisplaycoursesComponent } from './EmployeeComponents/diplaycourses/diplaycourses.component';
import { PendingcoursesComponent } from './EmployeeComponents/pendingcourses/pendingcourses.component';
import { ActivecoursesComponent } from './EmployeeComponents/activecourses/activecourses.component';
import { CompletedcoursesComponent } from './EmployeeComponents/completedcourses/completedcourses.component';
import { HrComponent } from './hr/hr.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'courses', // child route path
        component: DisplaycoursesComponent, // child route component that the router renders
      },
      {
        path: 'pendingcourses', // child route path
        component: PendingcoursesComponent, // child route component that the router renders
      },
      {
        path: 'activecourses', // child route path
        component: ActivecoursesComponent, // child route component that the router renders
      },
      {
        path: 'completedcourses', // child route path
        component: CompletedcoursesComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'manager',
    component: ManagerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'hr',
    component: HrComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
];
