import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators'; // consider using take(1) instead

import { CharacterService } from '../character.service';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-roll-character',
  templateUrl: './roll-character.component.html',
  styleUrls: ['./roll-character.component.scss']
})
export class RollCharacterComponent implements OnInit {

  newCharacterForm: FormGroup;
  returnUrl: string;
  error: string;

  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private charService: CharacterService,
    private stats: StatsService
  ) { }

  ngOnInit() {
    this.newCharacterForm = this.formBuilder.group({
      playerName: ['Type your name here...', Validators.required],
      characterName: ['', Validators.required],
      characterLevel: [1, Validators.required],
      characterRace: ['Human', Validators.required],
      characterClass: ['Fighter', Validators.required]
    });
    this.returnUrl = '/view';
    this.stats.currentStrength.subscribe(str => this.Strength = str);
    this.stats.currentDexterity.subscribe(str => this.Dexterity = str);
    this.stats.currentConstitution.subscribe(str => this.Constitution = str);
    this.stats.currentIntelligence.subscribe(str => this.Intelligence = str);
    this.stats.currentWisdom.subscribe(str => this.Wisdom = str);
    this.stats.currentCharisma.subscribe(str => this.Charisma = str);
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
      strength: this.Strength,
      dexterity: this.Dexterity,
      constitution: this.Constitution,
      intelligence: this.Intelligence,
      wisdom: this.Wisdom,
      charisma: this.Charisma
    }).pipe(first())
    .subscribe( // Note the subscription on the service post here.
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
