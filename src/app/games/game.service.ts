import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from './Game';
import { Player } from '../players/Player';
import { TerritoriesService } from '../cards/territories/territories.service';
import { WildCard } from '../cards/wild-cards/WildCard';
import { TerritoryCard } from '../cards/territories/TerritoryCard';

@Injectable()
export class GameService {
  private game: Game;
  
  constructor(private territoriesService: TerritoriesService) { }

  public createGame(){
    this.game = new Game();
  }

  public buildBoard(){
    var cards:TerritoryCard[];
    this.territoriesService.getTerritoriesDeck().subscribe(
      territoriesCards => cards = territoriesCards
    );
    this.game.deck.push(cards);
    this.game.deck.push(new WildCard());
    this.game.deck.push(new WildCard());
    this.game.state = GameState.BuildingTheBoard
  }

  public addPlayer(game: Game, player: Player){    
    this.game.players.push(player);
  }

  public removePlayer(game: Game, player: Player){
    const index: number = this.game.players.indexOf(player);
    if (index !== -1) {
        this.game.players.splice(index, 1);
    }        
  }

}