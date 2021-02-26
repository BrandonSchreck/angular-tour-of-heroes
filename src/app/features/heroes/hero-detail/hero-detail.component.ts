import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<Hero>();

  heroForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(private location: Location, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { hero: Hero }) => {
      this.heroForm.patchValue({
        id: data.hero.id,
        name: data.hero.name,
      });
    });
  }

  clear(event: any): void {
    event.stopPropagation();
    const heroId = this.heroForm.value.id;
    this.heroForm.patchValue({
      id: heroId,
      name: '',
    });
  }

  goBack(event: any): void {
    event.stopPropagation();
    this.location.back();
  }

  submit() {
    if (this.heroForm.valid) {
      this.submitted.emit(this.heroForm.value);
    }
  }
}
