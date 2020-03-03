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
      strength: ['', Validators.required],
      dexterity: ['', Validators.required],
      constitution: ['', Validators.required],
      intelligence: ['', Validators.required],
      wisdom: ['', Validators.required],
      charisma: ['', Validators.required]
    });
    // ToDo: Refactor. Do I want to mass create characters, or view list after creation?
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/characters/view';
    this.returnUrl = '/view';
  }

  get field() { return this.newCharacterForm.controls; }

  sendCharacterToDB() {
    // this.loading = true;
    this.charService.postNewCharacter( {
      playerName: this.field.playerName.value,
      characterName: this.field.characterName.value,
      characterLevel: this.field.characterLevel.value,
      characterRace: this.field.characterRace.value,
      characterClass: this.field.characterClass.value,
      strength: this.field.strength.value,
      dexterity: this.field.dexterity.value,
      constitution: this.field.constitution.value,
      intelligence: this.field.intelligence.value,
      wisdom: this.field.wisdom.value,
      charisma: this.field.charisma.value
    }).pipe(first())
    .subscribe(
      data => {
        window.alert(this.field.characterName.value + ' joins the party!');
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        // this.loading = false;
      }
        )
  }

}
