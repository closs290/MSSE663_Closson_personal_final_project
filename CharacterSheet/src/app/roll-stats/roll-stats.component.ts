import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-stats',
  templateUrl: './roll-stats.component.html',
  styleUrls: ['./roll-stats.component.scss']
})
export class RollStatsComponent implements OnInit {

  constructor() { }

  Strength: number;
  Dexterity: number;
  Constitution: number;
  Intelligence: number;
  Wisdom: number;
  Charisma: number;

  // StrMod: number;

  // ToDo: Add in a single function call to generate modifiers
  // ToDo: Add logic to add + vs - to modifiers
  // ToDo: Add in display logic to accomodate both stat and modifier

  ngOnInit() {

  }

  rollStats() {
    this.Strength = this.addAndDropLowest(this.roll4d6());
    this.Dexterity = this.addAndDropLowest(this.roll4d6());
    this.Constitution = this.addAndDropLowest(this.roll4d6());
    this.Intelligence = this.addAndDropLowest(this.roll4d6());
    this.Wisdom = this.addAndDropLowest(this.roll4d6());
    this.Charisma = this.addAndDropLowest(this.roll4d6());

    // this.StrMod = Math.floor((this.Strength - 10) / 2);
  }

  roll4d6(): number[] {
    return [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
  }

  addAndDropLowest (rolls: number[]): number {

    let lowest = rolls[0];
    let total = 0;
    
    for (let i = 0; i < rolls.length; i++) {
      // console.log('Die #' + i + ': ' + rolls[i]);
      if (rolls[i] < lowest) {
        lowest = rolls[i];
      }
      total += rolls[i];
    }

    // console.log('Total: ' + total + ' - Lowest: ' + lowest);
    total -= lowest;
    // console.log('New total: ' + total);
  
    return total;
  }

  // Backup in case roll 4 drop lowest breaks:
  // this.Strength = Math.floor(Math.random() * 20) + 1;

}
