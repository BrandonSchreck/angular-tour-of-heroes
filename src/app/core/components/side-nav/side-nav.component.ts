import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  styleUrls: ['./side-nav.component.scss'],
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  @Input()
  open = false;

  @Output()
  closeMenu = new EventEmitter();
}
