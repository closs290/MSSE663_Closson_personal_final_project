import { Component, OnInit } from '@angular/core';
import { CharacterModel } from '../../../backend/models/character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  constructor(
    private CharacterList: CharacterModel[],
    private charService: CharacterService
  ) { }

  ngOnInit() {
    this.CharacterList = this.charService.listAllCharacters;
  }

}
