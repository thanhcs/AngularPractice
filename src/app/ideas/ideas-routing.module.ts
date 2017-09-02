import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeasComponent } from './ideas.component';

const routes: Routes = [
  {
    path: '', component: IdeasComponent, data: {breadcrumb: 'ideas'},
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'idea-list'},
      { path: 'idea-list', loadChildren: './idea-list/idea-list.module#IdeaListModule' },
      { path: 'idea-detail', loadChildren: './idea-detail/idea-detail.module#IdeaDetailModule', data: { breadcrumb: 'idea-detail'}}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }

export const routedComponent = [
  IdeasComponent
];
