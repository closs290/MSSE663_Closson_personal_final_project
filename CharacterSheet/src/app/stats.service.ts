import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  // Source for how to model this service:
  // https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/

  private strSource = new BehaviorSubject<number>(10);
  currentStrength = this.strSource.asObservable();
  private dexSource = new BehaviorSubject<number>(10);
  currentDexterity = this.dexSource.asObservable();
  private conSource = new BehaviorSubject<number>(10);
  currentConstitution = this.conSource.asObservable();
  private intSource = new BehaviorSubject<number>(10);
  currentIntelligence = this.intSource.asObservable();
  private wisSource = new BehaviorSubject<number>(10);
  currentWisdom = this.wisSource.asObservable();
  private chaSource = new BehaviorSubject<number>(10);
  currentCharisma = this.chaSource.asObservable();

  constructor() { }

  rollStats() {
    this.strSource.next(this.addAndDropLowest(this.roll4d6()));
    this.dexSource.next(this.addAndDropLowest(this.roll4d6()));
    this.conSource.next(this.addAndDropLowest(this.roll4d6()));
    this.intSource.next(this.addAndDropLowest(this.roll4d6()));
    this.wisSource.next(this.addAndDropLowest(this.roll4d6()));
    this.chaSource.next(this.addAndDropLowest(this.roll4d6()));
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
        if (rolls[i] < lowest) {
            lowest = rolls[i];
        }
        total += rolls[i];
    }
    total -= lowest;
    return total;
  }
}
