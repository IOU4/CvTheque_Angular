import { Role } from './../../role';
import { Component } from '@angular/core';
import { DocService } from 'src/app/core/service/doc.service';

@Component({
  selector: 'app-cv-viewer',
  templateUrl: './cv-viewer.component.html',
  styleUrls: ['./cv-viewer.component.css']
})
export class CvViewerComponent {

  // Role:string = "cme";
  Role:string = "student";
  constructor(private docService:DocService){}

  url?:string= this.docService.docUrl;
}
