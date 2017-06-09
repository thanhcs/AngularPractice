import { NgModule } from '@angular/core';
import { IdeasRoutingModule, routedComponent } from './ideas-routing.module';
import { IdeasComponent } from './ideas.component';

@NgModule({
  imports: [
    IdeasRoutingModule
  ],
  declarations: [routedComponent]
})
export class IdeasModule { }
