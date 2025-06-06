import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  {
    path: 'angular',
    loadChildren: () =>
      import('./features/angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'javascript',
    loadChildren: () =>
      import('./features/JavaScript/javascript.module').then(
        (m) => m.JavaScriptModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/About/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./features/Blogs/articles.module').then((m) => m.ArticlesModule),
  },
  {
    path: 'practical-questions',
    loadChildren: () =>
      import('./features/practical-questions/practical-questions.module').then((m) => m.PracticalQuestionsModule),
  },
];
