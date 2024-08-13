import { Component } from '@angular/core';
import {TechnologyComponent} from "./technology/technology.component";
import {NgForOf} from "@angular/common";
import {HobbyComponent} from "./hobby/hobby.component";
import {EducationComponent} from "./education/education.component";
import {TranslateModule} from "@ngx-translate/core";
import {Hobby, Technology, University} from "./about-me.model";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    TechnologyComponent,
    NgForOf,
    HobbyComponent,
    EducationComponent,
    TranslateModule,
    AppModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})


export class AboutMeComponent {

  technologies: Technology[] = [
    new Technology("Java 21", "java.png"),
    new Technology("Spring", "spring.png"),
    new Technology("Hibernate", "hibernate.png"),
    new Technology("JPA", "spring-data.png"),
    new Technology("Thymeleaf", "thymeleaf.png"),
    new Technology("PostgreSQL", "postgresql.png"),
    new Technology("MySQL", "mysql.png"),
    new Technology("ActiveMQ", "activemq.png"),
    new Technology("HTML", "html.png"),
    new Technology("CSS", "css.png"),
    new Technology("JavaScript", "javascript.png"),
    new Technology("Git", "git.png"),
    new Technology("Github", "github.png"),
    new Technology("Jenkins", "jenkins.png"),
    new Technology("Intellij", "intellij-idea.png"),
    new Technology("Postman", "postman.png"),
    new Technology("Jira", "jira.png"),
    new Technology("Confluence", "confluence.png"),
  ];

  hobbies: Hobby[] = [
    new Hobby("ABOUT_ME_HOBBY_GYM", "gym.png"),
    new Hobby("ABOUT_ME_HOBBY_CODING", "code.png"),
    new Hobby("ABOUT_ME_HOBBY_BOARD_GAMES", "board-game.png"),
    new Hobby("ABOUT_ME_HOBBY_COOKING", "cooking.png"),
    new Hobby("ABOUT_ME_HOBBY_CYCLING", "bicycle.png"),
  ];

  universities: University[] = [
    new University(
      "ABOUT_ME_EDUCATION_SGGW_TITLE",
      "ABOUT_ME_EDUCATION_SGGW_DESCRIPTION",
      "sggw.png",
      true
    ),
    new University(
      "ABOUT_ME_EDUCATION_UAL_TITLE",
      "ABOUT_ME_EDUCATION_UAL_DESCRIPTION",
      "ual.png",
      false
    )
  ];

}
