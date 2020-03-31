import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game;

  constructor() { }

  ngOnInit() {
    this.game = new Game();
  }
}