import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss'],
})
export class HeroFilterComponent implements OnInit {
  @Input() filter: FormControl;
  constructor() {}

  ngOnInit(): void {}

  clear() {
    this.filter.setValue('');
  }
}
