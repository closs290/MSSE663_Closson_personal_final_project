import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { character } from '../datatypes.model';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  // hero: character;

  selectedRaceOptionObj = {
    word: 'show this please'
  };

  constructor() { }

  ngOnInit() {
  }

}
