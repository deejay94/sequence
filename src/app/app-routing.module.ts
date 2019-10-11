import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSequenceComponent } from './components/add-sequence/add-sequence.component'


const routes: Routes = [
  {
    path: 'sequence/create',
    component: AddSequenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
