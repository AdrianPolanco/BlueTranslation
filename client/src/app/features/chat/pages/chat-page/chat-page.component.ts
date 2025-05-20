import { Component } from '@angular/core';
import {ChatInputComponent} from '../../components/chat-input/chat-input.component';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Select} from 'primeng/select';
import {Button} from 'primeng/button';

@Component({
  selector: 'feature-chat-main-page',
  imports: [
    ChatInputComponent,
    FormsModule,
    ReactiveFormsModule,
    Select,
    Button
  ],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {

  availableLanguages = [
    { label: 'Español', value: 'ES' },
    { label: 'Inglés', value: 'EN' },
    { label: "Frances", value: 'FR' },
    { label: "Aleman", value: 'GER' },
    { label: "Italiano", value: 'ITL' }
  ];

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
