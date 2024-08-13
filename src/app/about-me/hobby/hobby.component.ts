import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Hobby} from "../about-me.model";

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css'
})
export class HobbyComponent {

  @Input() hobby!: Hobby;

}
