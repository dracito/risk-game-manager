import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player:Player;

  constructor() { }

  ngOnInit() {
    this.player = new Player();
  }

}