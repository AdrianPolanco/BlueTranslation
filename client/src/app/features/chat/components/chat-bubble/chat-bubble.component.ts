import {Component, input} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {TranslationMessage} from '../../types/translationMessage.type';

@Component({
  selector: 'chat-bubble',
  imports: [Avatar],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.css'
})
export class ChatBubbleComponent {
  message = input.required<TranslationMessage>()
}
