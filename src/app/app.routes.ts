import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'javascript', pathMatch: 'full' },
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
];
