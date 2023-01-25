import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const childRoutes: Routes = [
  {
    path: 'student', children: [
      { path: 'dashboard', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class StudenRoutingModule { }

