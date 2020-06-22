import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturedComponent } from './products/featured/featured.component';
import { PersonalizeComponent } from './products/personalize/personalize.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'featured'},
  { path: 'featured', component: FeaturedComponent },
  { path: 'personalize', component: PersonalizeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
