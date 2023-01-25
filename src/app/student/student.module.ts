import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudenRoutingModule
  ]
})
export class StudentModule { }
