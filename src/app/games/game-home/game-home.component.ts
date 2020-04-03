import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.css']
})
export class GameHomeComponent implements OnInit {
  
  gameCreate:boolean;
  gameJoin:boolean;

  constructor() { }

  ngOnInit() {
    this.gameCreate = false;
    this.gameJoin = false;
  }

  createGame(){
    this.gameCreate = true;
    this.gameJoin = false;
  }

  joinGame(){
    this.gameCreate = false;
    this.gameJoin = true;
  }
}