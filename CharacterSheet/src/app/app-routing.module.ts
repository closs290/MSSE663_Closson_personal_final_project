import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { RollCharacterComponent } from './roll-character/roll-character.component';
import { RollStatsComponent } from './roll-stats/roll-stats.component';


const routes: Routes = [
  { path: '',    redirectTo: 'view', pathMatch: 'full' },
  // { path: '**',  redirectTo: 'view' },
  { path: 'view',  component: CharacterListComponent },
  { path: 'rollCharacter',  component: RollCharacterComponent },
  { path: 'rollStats',  component: RollStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
