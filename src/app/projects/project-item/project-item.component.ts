import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Project} from "../projects.model";

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule,
    NgClass,
    NgIf
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  @Input() project!: Project;

}
