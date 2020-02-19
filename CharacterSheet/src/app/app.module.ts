import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    CreateCharacterComponent,
    CharacterPanelComponent,
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
