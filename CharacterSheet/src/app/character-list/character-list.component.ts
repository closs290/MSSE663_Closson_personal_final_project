import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { CharacterModel } from '../../../backend/models/character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: CharacterModel[];
  private CharacterList$: Observable<CharacterModel[]>;

  constructor(
    private charService: CharacterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.CharacterList$ = this.charService.listAllCharacters();
  }

}
