import { Component } from '@angular/core';
import { Skill } from './skill/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  my_skills: Skill[] = [
    new Skill('Java', 'some_url', 3),
    new Skill('Spring Boot', 'url', 3),
    new Skill('Golang', 'url', 2),
    new Skill('Angular', 'url', 1),
    new Skill('Python', 'url', 2)
  ];


}
