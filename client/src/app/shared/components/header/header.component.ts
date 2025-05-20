import { Component } from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Button} from 'primeng/button';

@Component({
  selector: 'shared-header',
  imports: [
    Menubar,
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
