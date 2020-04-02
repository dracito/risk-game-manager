import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  game;
  createForm;

  constructor(private gameService:GameService, private formBuilder: FormBuilder) { 
    this.createForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit(data) {
    // Process checkout data here
    this.game = this.gameService.createGame();
    this.createForm.reset();

    console.warn('La partie a bien été créée', data);
  }
}