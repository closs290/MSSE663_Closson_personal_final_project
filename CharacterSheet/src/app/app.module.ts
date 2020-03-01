import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { RollCharacterComponent } from './roll-character/roll-character.component';
import { RollStatsComponent } from './roll-stats/roll-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CreateCharacterComponent,
    CharacterPanelComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    RollCharacterComponent,
    RollStatsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
