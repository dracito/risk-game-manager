import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Game } from './Game';
import { Player } from '../players/Player';
import { TerritoriesService } from '../cards/territories/territories.service';
import { WildCard } from '../cards/wild-cards/WildCard';
import { TerritoryCard } from '../cards/territories/TerritoryCard';
import { MissionCard } from '../cards/missions/MissionCard';
import { DeckCard } from '../cards/DeckCard';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Injectable()
export class GameService {

  constructor(private territoriesService: TerritoriesService) { }

  public buildMissions(game:Game){
    let cards:MissionCard[];

  }

  public buildDeck(game:Game){    
    //Add 2 Wild Cards
    game.deck.push(new WildCard());
    game.deck.push(new WildCard());
    
    //Add Territories Cards
    const myObserver = {
      next(x) {
        if(x.length > 0){
          for (let card of x) {
            game.deck.push(card);
          }
        }
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {this.shuffle(game.deck);}
    };
    this.territoriesService.getTerritoriesDeck().subscribe(myObserver);    
  }

  public addPlayer(game: Game, player: Player){    
    game.players.push(player);
  }

  public removePlayer(game: Game, player: Player){
    const index: number = game.players.indexOf(player);
    if (index !== -1) {
        game.players.splice(index, 1);
    }        
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  public shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }
}