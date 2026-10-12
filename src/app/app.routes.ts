import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'IsoForm Studio · 3D isometric views of building plans' },
  { path: 'work/pradeep-residence', component: ShowcaseComponent, title: 'Pradeep Residence · IsoForm Studio' },
  { path: '**', redirectTo: '' },
];
