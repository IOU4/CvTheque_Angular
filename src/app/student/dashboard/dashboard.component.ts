import { Component } from '@angular/core';
import { Role } from 'src/app/role';
import { Document } from '../document';
import { Education } from '../education';
import { Experience } from '../experience';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  skills: string[] = ['javascript', 'angular', 'java', 'spring boot', 'php', 'laravel'];

  private student = { id: 1, name: 'emad', email: "emad@youcode.ma", role: Role.student }

  educations: Education[] = [
    { id: 1, student: this.student, institution: 'cadi ayyad', degree: 'bachelor', startDate: new Date(), filed: 'scinece', endDate: null },
    { id: 1, student: this.student, institution: 'cadi ayyad', degree: 'bachelor', startDate: new Date(), filed: 'scinece', endDate: null }
  ]
  experiences: Experience[] = [
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
  ]

  documents: Document[] = [
    { student: this.student, previewImage: "https://static.vecteezy.com/system/resources/thumbnails/012/507/318/small/black-friday-season-flyer-template-with-2-image-placeholder-creative-clean-and-multipurpose-fashion-sale-design-template-with-a4-size-vector.jpg", title: "imad_ouchaib_cv.pdf", type: "cv", url: "https://drive.google.com/file/d/13RVgmP5CuavvlICd3ScEjHpemNXKcutq/view?usp=share_link" },
    { student: this.student, previewImage: "https://static.vecteezy.com/system/resources/thumbnails/012/507/318/small/black-friday-season-flyer-template-with-2-image-placeholder-creative-clean-and-multipurpose-fashion-sale-design-template-with-a4-size-vector.jpg", title: "houssam-eddine_cv.pdf", type: "cv", url: "https://docs.google.com/document/d/1-NbuxxgsukztcvQHyGEkCVagA-ZUGUu528jzSNcvfV0/edit?usp=sharing" }
  ]

}
