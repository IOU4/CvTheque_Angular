import { Component, Input } from '@angular/core';
import { DocService } from 'src/app/core/service/doc.service';
import { Document } from '../document';
@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent {
  @Input() document?: Document

  constructor(
    private docService:DocService,
    ){}

  viewer(docUrl?:string){
    this.docService.docUrl= docUrl;
  }
}
