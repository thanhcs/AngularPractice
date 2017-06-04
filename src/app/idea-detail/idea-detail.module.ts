import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { IdeaDetailComponent } from './idea-detail.component';
import { IdeaDetailRoutingModule } from './idea-detail-routing.module';

@NgModule({
  imports: [
    IdeaDetailRoutingModule
  ],
  declarations: [CommentComponent, ActionBarComponent, IdeaDetailComponent]
})
export class IdeaDetailModule { }
