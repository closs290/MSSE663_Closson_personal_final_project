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

  // Strength: number;
  // Dexterity: number;
  // Constitution: number;
  // Intelligence: number;
  // Wisdom: number;
  // Charisma: number;

  ngOnInit() {
    // this.Strength = 5;
    // this.Dexterity = 5;
    // this.Constitution = 5;
    // this.Intelligence = 5;
    // this.Wisdom = 5;
    // this.Charisma = 5;
  }

}
