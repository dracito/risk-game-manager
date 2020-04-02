import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-join',
  templateUrl: './game-join.component.html',
  styleUrls: ['./game-join.component.css']
})
export class GameJoinComponent implements OnInit {
  game;
  joinForm = new FormGroup({
    nameControl: new FormControl(''),
  });

  constructor(private gameService:GameService) {     
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn('Vous avez bien rejoint la partie', this.joinForm.value);
    console.warn('Vous avez bien rejoint la partie', this.joinForm.value["tokenControl"]);
    //TODO vérifier l'existance de la partie
    //TODO vérifier que la partie n'est pas déjà démarrée
    //TODO vérifier qu'il reste une place pour la partie
    //TODO accèder à la partie (Demander le nom du joueur au préalable?)
    //this.game = this.gameService.joinGame();
    this.joinForm.reset();    
  }
}