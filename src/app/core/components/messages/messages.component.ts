import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  @Input()
  messages: string[];

  @Output()
  clearMessages = new EventEmitter();

  clear() {
    this.clearMessages.emit(null);
  }
}
