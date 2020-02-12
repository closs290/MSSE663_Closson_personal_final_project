import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SaveComponent } from './save/save.component';
import { UploadComponent } from './upload/upload.component';
import { StatsComponent } from './stats/stats.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaveComponent,
    UploadComponent,
    StatsComponent,
    ProficienciesComponent,
    CreateCharacterComponent,
    CarListComponent
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
