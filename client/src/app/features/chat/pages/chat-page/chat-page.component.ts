import { Component } from '@angular/core';
import {ChatInputComponent} from '../../components/chat-input/chat-input.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Select} from 'primeng/select';
import {Button} from 'primeng/button';
import {TranslationMessage} from '../../types/translationMessage.type';
import {Language} from '../../types/language.type';
import {ChatBubbleComponent} from '../../components/chat-bubble/chat-bubble.component';

@Component({
  selector: 'feature-chat-main-page',
  imports: [
    ChatInputComponent,
    FormsModule,
    ReactiveFormsModule,
    Select,
    Button,
    ChatBubbleComponent
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {

  availableLanguages: Language[] = [
    { label: 'Español', value: 'ES' },
    { label: 'Inglés', value: 'EN' },
    { label: "Frances", value: 'FR' },
    { label: "Aleman", value: 'GER' },
    { label: "Italiano", value: 'ITL' }
  ];

  messages: TranslationMessage[] = [
    {
      id: '1',
      text: 'Probando primer mensaje',
      comesFromUser: true,
      language: {
        label: 'Español',
        value: 'ES'
      },
      photoUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    {
      id: '2',
      text: 'Testing first message',
      comesFromUser: false,
      language: {
        label: "Ingles",
        value: 'EN'
      },
      photoUrl: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
    },
    {
      id: '3',
      text: 'Probando segundo mensaje',
      comesFromUser: true,
      language: {
        label: 'Español',
        value: 'ES'
      }
    },
    {
      id: '4',
      text: 'Testing second message',
      comesFromUser: false,
      language: {
        label: "Ingles",
        value: 'EN'
      }
    },
    {
      id: '5',
      text: 'Probando tercer mensaje',
      comesFromUser: true,
      language: {
        label: 'Español',
        value: 'ES'
      }
    },
    {
      id: '6',
      text: 'Testing third message',
      comesFromUser: false,
      language: {
        label: "Ingles",
        value: 'EN'
      }
    },
    {
      id: '7',
      text: 'Probando cuarto mensaje',
      comesFromUser: true,
      language: {
        label: 'Español',
        value: 'ES'
      }
    },
    {
      id: '8',
      text: 'Testing fourth message',
      comesFromUser: false,
      language: {
        label: "Ingles",
        value: 'EN'
      }
    },
    {
      id: '8',
      text: 'Probando quinto mensaje',
      comesFromUser: true,
      language: {
        label: 'Español',
        value: 'ES'
      }
    },
    {
      id: '10',
      text: 'Testing fifth message',
      comesFromUser: false,
      language: {
        label: "Ingles",
        value: 'EN'
      }
    }
  ]

  formGroup: FormGroup = new FormGroup({
    selectedOriginLanguage: new FormControl(this.availableLanguages[0]),
    selectedDestinationLanguage: new FormControl(this.availableLanguages[1]),
  });

  get filteredOriginLanguages() {
    const destination = this.formGroup.get('selectedDestinationLanguage')?.value?.value;
    return this.availableLanguages.filter(lang => lang.value !== destination);
  }

  get filteredDestinationLanguages() {
    const origin = this.formGroup.get('selectedOriginLanguage')?.value?.value;
    return this.availableLanguages.filter(lang => lang.value !== origin);
  }
}
