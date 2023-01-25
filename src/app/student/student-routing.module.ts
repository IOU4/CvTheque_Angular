import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class StudenRoutingModule { }

