import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LauncheDetailsComponent } from './components/launche-details/launche-details.component';
import { LaunchesListComponent } from './components/launches-list/launches-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'launches-list', pathMatch: 'full' },
  { path: 'launches-list', component: LaunchesListComponent },
  { path: 'launche/:id', component: LauncheDetailsComponent },
  { path: '**', redirectTo: 'launches-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
