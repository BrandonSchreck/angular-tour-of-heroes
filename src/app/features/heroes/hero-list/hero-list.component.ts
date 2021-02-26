import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() heroDeleteEvent = new EventEmitter<Hero>();

  constructor() {}

  ngOnInit(): void {}

  delete(hero: Hero, $event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.heroDeleteEvent.emit(hero);
  }
}
