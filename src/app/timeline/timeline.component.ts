import { Component } from '@angular/core';
import {AppModule} from "../app.module";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Job} from "./timeline.model";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    AppModule,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  jobs: Job[] = [
    new Job(
      "TIMELINE_JOB_1_TITLE",
      "TIMELINE_JOB_1_DESCRIPTION",
      [
        "TIMELINE_JOB_1_STEP_1",
        "TIMELINE_JOB_1_STEP_2",
        "TIMELINE_JOB_1_STEP_3"
      ],
      "java.png",
      "TIMELINE_JOB_1_DATE",
      "TIMELINE_JOB_1_COMPANY",
      "TIMELINE_JOB_1_POSITION"
    ),
    new Job(
      "TIMELINE_JOB_2_TITLE",
      "TIMELINE_JOB_2_DESCRIPTION",
      [
        "TIMELINE_JOB_2_STEP_1",
        "TIMELINE_JOB_2_STEP_2",
      ],
      "c-sharp.png",
      "TIMELINE_JOB_2_DATE",
      "TIMELINE_JOB_2_COMPANY",
      "TIMELINE_JOB_2_POSITION"
    ),
    new Job(
      "TIMELINE_JOB_3_TITLE",
      "TIMELINE_JOB_3_DESCRIPTION",
      [
        "TIMELINE_JOB_3_STEP_1",
        "TIMELINE_JOB_3_STEP_2",
        "TIMELINE_JOB_3_STEP_3",
      ],
      "python.png",
      "TIMELINE_JOB_3_DATE",
      "TIMELINE_JOB_3_COMPANY",
      "TIMELINE_JOB_3_POSITION"
    ),
    new Job(
      "TIMELINE_JOB_4_TITLE",
      "TIMELINE_JOB_4_DESCRIPTION",
      [
        "TIMELINE_JOB_4_STEP_1",
        "TIMELINE_JOB_4_STEP_2",
        "TIMELINE_JOB_4_STEP_3",
      ],
      "python.png",
      "TIMELINE_JOB_4_DATE",
      "TIMELINE_JOB_4_COMPANY",
      "TIMELINE_JOB_4_POSITION"
    )
  ]

}
