import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialExampleModule } from 'src/material.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudenRoutingModule,
    MaterialExampleModule
  ]
})
export class StudentModule { }
