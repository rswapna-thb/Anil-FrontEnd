import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AdddepartComponent} from './adddepart/adddepart.component';

const routes: Routes = [
  { path: 'add', component: AdddepartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
