import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players;

  constructor(private playersService:PlayersService) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe(
      players => this.players = players
    );
  }

}