import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JsTopicListComponent } from './JS-topic-List/js-topic-list.component';


const routes: Routes = [
  { path: '', component: JsTopicListComponent },
  // { path: ':id', component: TopicDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JavaScriptModule {}
