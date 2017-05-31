import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentComponent, ActionBarComponent]
})
export class IdeaDetailModule { }
