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

  // characters: CharacterModel[];
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
    // Probably not the best way to do this, but it re-loads the view
    // to accomodate the deletion.
    this.CharacterList$ = this.charService.listAllCharacters();
  }

  onSelect(character: CharacterModel): void {
    this.selectedCharacter = character;
  }

  newRollStatsWindow() {
    window.open('http://localhost:4200/rollStats');
    // this.router.navigate(['/rollStats']);
    // consider using BrowserWindow = remote.BrowserWindow;
    // win = new BrowserWindow({ width, height, center, resizable, frame, transparent });
    // win.loadURL('http://localhost:4200/rollStats')
  }

}
