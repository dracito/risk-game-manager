import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player:Player;

  constructor(private playersService:PlayersService) { }

  ngOnInit() {
    this.player = this.playersService.getMyPlayer();   
  }

}