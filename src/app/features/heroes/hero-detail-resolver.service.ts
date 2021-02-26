import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { HeroService } from 'src/app/core/services/';
import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroDetailResolver implements Resolve<Hero> {
  constructor(private heroService: HeroService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Hero> | Observable<never> {
    const id = +route.paramMap.get('id');

    return this.heroService.getHero(id).pipe(
      mergeMap((hero) => {
        if (hero) {
          return of(hero);
        } else {
          this.router.navigate(['/heroes']);
          return EMPTY;
        }
      })
    );
  }
}
