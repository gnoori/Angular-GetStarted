import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  get messages(): string[] {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService, private router: Router) {}

  close(): void {
    // Close the popup.
  }
}
