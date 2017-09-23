import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'app/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ideas' },
      { path: 'ideas', loadChildren: './ideas/ideas.module#IdeasModule', data: { breadcrumb: 'ideas' } },
      { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, enableTracing: false, initialNavigation: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }
}
