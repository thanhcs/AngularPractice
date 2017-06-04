import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'idea-list'},
  { path: 'idea-list', loadChildren: './idea-list/idea-list.module#IdeaListModule'},
  { path: 'idea-detail', loadChildren: './idea-detail/idea-detail.module#IdeaDetailModule'},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
