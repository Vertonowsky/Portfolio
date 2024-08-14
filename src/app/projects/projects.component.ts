import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {AppModule} from "../app.module";
import {TranslateModule} from "@ngx-translate/core";
import {ExternalButton, Project} from "./projects.model";
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";
import {ProjectImageComponent} from "./project-image/project-image.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AppModule,
    TranslateModule,
    NgForOf,
    NgClass,
    ProjectItemComponent,
    ProjectImageComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {

  private readonly MIN_SWIPE_DISTANCE = 50;
  private xStart: number | null = null;

  @Input() activeIndex : number = 0;

  constructor(private elementRef: ElementRef) {}

  projects : Project[] = [
    new Project(
      "PROJECT_1_TITLE",
      "PROJECT_1_DESCRIPTION",
      ["Java", "Spring", "Hibernate", "JPA", "Thymeleaf", "Git", "MySQL", "OAuth 2.0", "HTML", "CSS", "JavaScript"],
      [new ExternalButton("PROJECTS_SOURCE_CODE", "https://github.com/Vertonowsky/Online-Courses")]
    ),
    new Project(
      "PROJECT_2_TITLE",
      "PROJECT_2_DESCRIPTION",
      ["JavaScript", "HTML", "CSS", "Git", "C++", "Arduino"],
      [new ExternalButton("PROJECTS_SOURCE_CODE", "https://github.com/Vertonowsky/Leds-Controller")],
    ),
    new Project(
      "PROJECT_3_TITLE",
      "PROJECT_3_DESCRIPTION",
      ["Java", "Spring", "Hibernate", "JPA", "Git", "PostgreSQL", "OAuth 2.0", "HTML", "CSS", "TypeScript", "React"],
      [new ExternalButton("Frontend", "https://github.com/Vertonowsky/admin-panel-frontend"),
        new ExternalButton("Backend", "https://github.com/Vertonowsky/admin-panel-backend")]
    ),
  ]

  projectImages : string[] = [
    "project-1-720p.png",
    "project-2-720p.png",
    "project-3-720p.png",
  ]


  specificSlide(index: number): void {
    if (index === this.activeIndex) return;

    this.activeIndex = index;
  }

  nextSlide(): void {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  previousSlide(): void {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  isNext(index: number): boolean {
    return (this.activeIndex + 1) % this.projects.length === index;
  }

  isFuture(index: number): boolean {
    return index !== this.activeIndex && !this.isNext(index);
  }

  classList(index: number): string[] {
    const classes : string[] = [];
    if (index === this.activeIndex)
      classes.push('active');

    if (this.isNext(index))
      classes.push('next');

    if (this.isFuture(index))
      classes.push('future');

    return classes;
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.elementRef.nativeElement.addEventListener('touchend', this.onTouchEnd.bind(this), false);
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.elementRef.nativeElement.removeEventListener('touchend', this.onTouchEnd.bind(this), false);
  }

  private onTouchStart(evt: TouchEvent): void {
    this.xStart = evt.touches[0].clientX;
  }

  private onTouchEnd(evt: TouchEvent): void {
    if (this.xStart === null) return;

    const xEnd = evt.changedTouches[0].clientX;
    const xDiff = this.xStart - xEnd;

    if (Math.abs(xDiff) > this.MIN_SWIPE_DISTANCE) {
      if (xDiff > 0) {
        // Swipe left
        this.nextSlide();
      } else {
        // Swipe right
        this.previousSlide();
      }
    }
  }

}
