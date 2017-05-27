import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { throwIfAlreadyLoaded } from './mdule-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    SidebarComponent
  ],
  exports: [
    NavBarComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}