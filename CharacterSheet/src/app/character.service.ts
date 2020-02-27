import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { CharacterModel } from '../../backend/models/character.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  API_URL: string = environment.apiUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private httpClient: HttpClient, 
    public router: Router
    ) { }

  listAllCharacters() {
    return this.httpClient.get<any>(`${this.API_URL}/characters/`);
  }

  retrieveOneCharacter(characterId: string) {
    return this.httpClient.get<any>(`${this.API_URL}/characters/:characterId`);
  }

  postNewCharacter(characterData: CharacterModel) {
    return this.httpClient.post<CharacterModel>(`${this.API_URL}/characters/`, characterData);
  }

  updateCharacter(characterId: string, characterData: CharacterModel) {
    return this.httpClient.put<CharacterModel>(`${this.API_URL}/characters/:characterId`, characterData);
  }

  deleteCharacter(characterId: string) {
    return this.httpClient.delete<CharacterModel>(`${this.API_URL}/characters/:characterId`);
  }
  
}
