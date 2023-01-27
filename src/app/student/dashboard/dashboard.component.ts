import { Component } from '@angular/core';
import { Role } from 'src/app/role';
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

  education: Education[] = [
    { id: 1, student: this.student, institution: 'cadi ayyad', degree: 'bachelor', startDate: new Date(), filed: 'scinece', endDate: null },
    { id: 1, student: this.student, institution: 'cadi ayyad', degree: 'bachelor', startDate: new Date(), filed: 'scinece', endDate: null }
  ]
  experience: Experience[] = [
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
    { student: this.student, company: "Microsoft", poste: "backend developper", startDate: new Date(), endDate: new Date() },
  ]
}
