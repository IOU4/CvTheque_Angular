import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialExampleModule } from 'src/material.module';
import { DocumentPreviewComponent } from './document-preview/document-preview.component';
import { CvViewerComponent } from './cv-viewer/cv-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  declarations: [
    DashboardComponent,
    DocumentPreviewComponent,
    CvViewerComponent
  ],
  imports: [
    CommonModule,
    StudenRoutingModule,
    MaterialExampleModule,
    NgxDocViewerModule
  ]
})
export class StudentModule { }
