import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  imports: [MaterialModule, MatChipsModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutMeComponent {
  frontendSkills = [
    { name: 'Angular', level: 'Expert', imageUrl: '/assets/icons-angular.svg' },
    {
      name: 'TypeScript',
      level: 'Expert',
      imageUrl: '/assets/icons-typescript.svg',
    },
    {
      name: 'JavaScript (ES6+)',
      level: 'Expert',
      imageUrl: '/assets/icons-javascript.svg',
    },
    { name: 'HTML5', level: 'Expert', imageUrl: '/assets/icons-html.svg' },
    { name: 'CSS3', level: 'Expert', imageUrl: '/assets/icons-css.svg' },
    { name: 'RxJS', level: 'Advanced', imageUrl: '/assets/rxjs-logo.png' },
    {
      name: 'Angular Material',
      level: 'Expert',
      imageUrl: '/assets/icons-angular Material.svg',
    },
    {
      name: 'Bootstrap',
      level: 'Intermediate',
      imageUrl: '/assets/icons-bootstrap.svg',
    },
  ];

  tools = [
    { name: 'Angular CLI', imageUrl: '/assets/icons-angular.svg' },
    { name: 'Git', imageUrl: '/assets/icons-git.svg' },
    { name: 'NPM', imageUrl: '/assets/npm_logo.png' },
    { name: 'Visual Studio Code', imageUrl: '/assets/icons-vscode.svg' },
    { name: 'Postman', imageUrl: '/assets/icons_postman.jpg' },
  ];

  methodologies = [
    { name: 'Agile (Scrum)', imageUrl: '/assets/agile.jpg' },
    { name: 'CI/CD', imageUrl: '/assets/ci-cd.jpg' },
    { name: 'Responsive Design', imageUrl: '/assets/responsive.png' },
  ];

  softSkills = [
    { name: 'Problem-solving', imageUrl: '/assets/problemsolving.jpg' },
    { name: 'Critical Thinking', imageUrl: '/assets/thinking.jpg' },
    { name: 'Team Collaboration', imageUrl: '/assets/team.png' },
    { name: 'Communication', imageUrl: '/assets/communication.jpg' },
    { name: 'Adaptability', imageUrl: '/assets/adaptibility.png' },
  ];
}
