import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {Textarea} from 'primeng/textarea';

@Component({
  selector: 'feature-chat-input',
  imports: [
    FormsModule,
    ButtonModule,
    Textarea
  ],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  value!: string;
}
