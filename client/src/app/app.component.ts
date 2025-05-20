import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChatInputComponent} from './components/chat-input/chat-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
