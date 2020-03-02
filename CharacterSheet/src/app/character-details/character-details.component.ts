import { Component, OnInit, Input } from '@angular/core';
import { CharacterModel } from 'backend/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() thisCharacter: CharacterModel;

  constructor() { }

  // playerName: string;
  // characterName: string;
  // characterLevel: number; // TODO: Limit to 1-20
  // characterRace: string; // TODO: Limit to enum
  // characterClass: string; // TODO: Limit to enum

  ngOnInit() {
    // this.playerName = 'Ben';
    // this.characterName = 'Oreius Rhaecus';
    // this.characterLevel = 20;
    // this.characterRace = 'Centaur';
    // this.characterClass = 'Druid';
  }

}
