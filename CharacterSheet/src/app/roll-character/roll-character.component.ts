import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators'; // consider using take(1) instead

import { CharacterService } from '../character.service';

@Component({
  selector: 'app-roll-character',
  templateUrl: './roll-character.component.html',
  styleUrls: ['./roll-character.component.scss']
})
export class RollCharacterComponent implements OnInit {

  newCharacterForm: FormGroup;
  returnUrl: string;
  error: string;

  // ToDo: Import from model
  // raceList = [
  //   {race: 'Human'},
  //   {race: 'Elf'},
  //   {race: 'Dwarf'}
  // ];
  // classList = [
  //   {class: 'Fighter'},
  //   {class: 'Rogue'},
  //   {class: 'Wizard'},
  //   {class: 'Cleric'}
  // ];

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private charService: CharacterService
  ) { }

  ngOnInit() {
    this.newCharacterForm = this.formBuilder.group({
      playerName: ['', Validators.required],
      characterName: ['', Validators.required],
      characterLevel: [1, Validators.required],
      characterRace: ['', Validators.required],
      characterClass: ['', Validators.required],
    });
    // ToDo: Refactor. Do I want to mass create characters, or view list after creation?
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/characters/view';
  }

  get field() { return this.newCharacterForm.controls; }

  sendCharacterToDB() {
    // this.loading = true;
    this.charService.postNewCharacter( {
      playerName: this.field.playerName.value,
      characterName: this.field.characterName.value,
      characterLevel: this.field.characterLevel.value,
      charaterRace: this.field.characterRace.value,
      characterClass: this.field.characterClass.value,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    }).pipe(first())
    .subscribe(
      data => {
        window.alert('New character created!');
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        // this.loading = false;
      }
        )
  }

}
