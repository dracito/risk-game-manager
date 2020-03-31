import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';
import { GameState } from '../GameState';
import { GameService } from '../game.service';
import { WildCard } from '../../cards/wild-cards/WildCard';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game;
  gameState;


  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.game = new Game();
    this.gameState = GameState[this.game.state];
    this.buildGameDeck();
  }

  buildGameDeck(){
    this.gameService.buildDeck(this.game);
  }

  isWildCard(candidate) { return candidate instanceof WildCard;}
}