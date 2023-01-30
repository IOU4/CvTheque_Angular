import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialExampleModule } from 'src/material.module';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DocumentPreviewComponent
  ],
  imports: [
    CommonModule,
    StudenRoutingModule,
    MaterialExampleModule
  ]
})
export class StudentModule { }
