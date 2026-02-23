import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.routes),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './routes').then((m) => m.routes),
  },
  { path: '', redirectTo: 'mfe1', pathMatch: 'full' },
];
