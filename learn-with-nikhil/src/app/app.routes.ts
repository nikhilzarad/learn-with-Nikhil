import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'angular', pathMatch: 'full' },
  {
    path: 'angular',
    loadChildren: () =>
      import('./features/angular/angular.module').then((m) => m.AngularModule),
  },
  // {path: 'javascript', loadChildren: () => import('./features/javascript/javascript.module').then(m => m.JavascriptModule)},
];
