import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';

import { HeroService } from 'src/app/core/services/';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list-container.component.html',
  styleUrls: ['./hero-list-container.component.scss'],
})
export class HeroListContainerComponent implements OnInit {
  filter: FormControl;
  filteredHeroes$: Observable<Hero[]>;
  filterTerm$: Observable<string>;
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.filter = new FormControl('');
    this.filterTerm$ = this.filter.valueChanges.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // set default value
      startWith('')
    );
    this.heroes$ = this.heroService.getHeroes();
    this.filteredHeroes$ = combineLatest([this.heroes$, this.filterTerm$]).pipe(
      map(([heroes, filterTerm]) =>
        heroes.filter(
          (hero: Hero) =>
            hero.name.toLowerCase().indexOf(filterTerm.toLowerCase()) !== -1
        )
      )
    );
  }

  deleteHero(hero: Hero): void {
    console.log('delete event from child: ', hero);
  }
}
