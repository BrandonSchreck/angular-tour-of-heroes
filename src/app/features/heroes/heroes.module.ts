import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFilterComponent } from './hero-filter/hero-filter.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListContainerComponent } from './hero-list-container/hero-list-container.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroFilterComponent,
    HeroListComponent,
    HeroListContainerComponent,
    HeroesComponent,
  ],
  imports: [HeroesRoutingModule, ReactiveFormsModule, SharedModule],
})
export class HeroesModule {}
