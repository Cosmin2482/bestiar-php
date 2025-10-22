import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatureListComponent } from './creatures/creature-list/creature-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creatures', component: CreatureListComponent },
  { path: '**', redirectTo: '' }
];
