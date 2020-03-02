import { Component, OnInit, Input } from '@angular/core';
import { CharacterModel } from 'backend/models/character.model';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {
  @Input() thisCharacter: CharacterModel;

  constructor() { }

  ngOnInit() {
  }

}
