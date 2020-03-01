import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { RollCharacterComponent } from './roll-character/roll-character.component';
import { RollStatsComponent } from './roll-stats/roll-stats.component';


const routes: Routes = [
  { path: '',    redirectTo: 'rollCharacter', pathMatch: 'full' },
  { path: '**',  redirectTo: '' },
  { path: 'view',  component: CharacterListComponent },
  { path: 'rollCharacter',  component: RollCharacterComponent },
  { path: 'rollStats',  component: RollStatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
