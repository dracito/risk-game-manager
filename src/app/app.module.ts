import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MissionsService } from './cards/missions/missions.service';
import { MissionsListComponent } from './cards/missions/missions-list/missions-list.component';
import { TerritoriesService } from './cards/territories/territories.service';
import { TerritoriesListComponent } from './cards/territories/territories-list/territories-list.component';
import { GameService } from './games/game.service';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayersListComponent } from './players/players-list/players-list.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    MissionsListComponent,
    TerritoriesListComponent,
    GameDetailsComponent,
    PlayerDetailsComponent,
    PlayersListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    MissionsService,
    TerritoriesService,
    GameService]
})
export class AppModule { }
