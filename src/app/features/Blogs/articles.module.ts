import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './medium-articles/articles/articles.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  // { path: ':id', component: TopicDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesModule {}
