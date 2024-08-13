import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    AppModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
