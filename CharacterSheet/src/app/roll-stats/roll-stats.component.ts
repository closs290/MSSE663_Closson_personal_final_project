import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-roll-stats',
  templateUrl: './roll-stats.component.html',
  styleUrls: ['./roll-stats.component.scss']
})
export class RollStatsComponent implements OnInit {

  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;

  constructor(
    private stats: StatsService
  ) { }

  ngOnInit() {
    this.stats.currentStrength.subscribe(str => this.Strength = str);
    this.stats.currentDexterity.subscribe(str => this.Dexterity = str);
    this.stats.currentConstitution.subscribe(str => this.Constitution = str);
    this.stats.currentIntelligence.subscribe(str => this.Intelligence = str);
    this.stats.currentWisdom.subscribe(str => this.Wisdom = str);
    this.stats.currentCharisma.subscribe(str => this.Charisma = str);
  }

  rollDice() {
    this.stats.rollStats();
  }

}
