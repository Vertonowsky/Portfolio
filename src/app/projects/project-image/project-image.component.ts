import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-project-image',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './project-image.component.html',
  styleUrl: './project-image.component.css'
})
export class ProjectImageComponent {

  @Input() url!: string;
  @Input() index!: number;

}
