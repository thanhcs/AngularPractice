import { NgModule } from '@angular/core';

import { IdeaListRoutingModule, routedComponent } from './idea-list-routing.module';


@NgModule({
  imports: [
    IdeaListRoutingModule
  ],
  declarations: [ routedComponent ]
})
export class IdeaListModule { }
