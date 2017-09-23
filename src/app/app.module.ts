import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Kendo Grid
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HttpModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseLocation
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseLocation() {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  console.log('split', location.pathname.split('/'));
  console.log('PATHs', paths);
  const basePath: string = (paths && paths[0]) || 'my-account';
  return '/' + basePath;
}
