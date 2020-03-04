import { Component, OnInit, Input } from '@angular/core';
import { CharacterModel } from 'backend/models/character.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() thisCharacter: CharacterModel;

  constructor() { }

  ngOnInit() { }

}
