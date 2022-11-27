import { Component, Input, OnInit, SkipSelf } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent {

  @Input() skill!: Skill;


  constructor() {}

}
