import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenRoutingModule } from './student/student-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StudenRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
