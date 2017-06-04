import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdeaDetailComponent } from './idea-detail.component';
import { CommentComponent } from './comment/comment.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

const routes: Routes = [
  { path: '', component: IdeaDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class IdeaDetailRoutingModule { }

export const routedComponent = [
  ActionBarComponent,
  CommentComponent
];
