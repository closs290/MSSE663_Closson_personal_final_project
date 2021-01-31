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

  ngOnInit() { }

}
