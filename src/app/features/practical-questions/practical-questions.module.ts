import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PracticalQuestionsComponent } from './practical-questions-list/practical-questions.component';

const routes: Routes = [
  { path: '', component: PracticalQuestionsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
   
  ],
  exports: [RouterModule],
})
export class PracticalQuestionsModule {}
