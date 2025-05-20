import {Language} from './language.type';

export type TranslationMessage = {
  id: string,
  photoUrl?: string,
  text: string,
  comesFromUser: boolean,
  language: Language
}
