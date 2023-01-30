import { Component, Input } from '@angular/core';
import { Document } from '../document';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent {
  @Input() document?: Document;
}
