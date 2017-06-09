import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ideas'},
  { path: 'ideas', loadChildren: './ideas/ideas.module#IdeasModule'},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
