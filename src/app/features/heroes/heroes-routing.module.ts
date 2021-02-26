import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroListContainerComponent } from './hero-list-container/hero-list-container.component';
import { HeroDetailResolver } from './hero-detail-resolver.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        component: HeroListContainerComponent,
      },
    ],
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
