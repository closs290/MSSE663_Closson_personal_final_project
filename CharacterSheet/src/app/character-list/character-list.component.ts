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

  CharacterList$: Observable<CharacterModel[]>;
  selectedCharacter: CharacterModel;

  constructor(
    private charService: CharacterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.CharacterList$ = this.charService.listAllCharacters();
  }

  newCharacter() {
    this.router.navigate(['/rollCharacter']);
  }

  deleteCharacter(id: string) {
    this.charService.deleteCharacter(id).subscribe();
    this.CharacterList$ = this.charService.listAllCharacters();
    this.router.navigate(['/view']);
  }

  onSelect(character: CharacterModel): void {
    this.selectedCharacter = character;
  }

  newRollStatsWindow() { window.open('http://localhost:4200/rollStats'); }

}
