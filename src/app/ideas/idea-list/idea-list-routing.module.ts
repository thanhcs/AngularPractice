import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularComponent } from './popular/popular.component';
import { NewComponent } from './new/new.component';
import { IdeaListComponent } from './idea-list.component';

const routes: Routes = [
  {
    path: '',
    component: IdeaListComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'popular'
      },
      {
        path: 'popular',
        component: PopularComponent
      },
      {
        path: 'new',
        component: NewComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IdeaListRoutingModule { }

export const routedComponent = [
  PopularComponent,
  NewComponent,
  IdeaListComponent
];
