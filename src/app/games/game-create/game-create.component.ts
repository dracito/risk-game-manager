import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { GameService } from '../game.service';
import { Game } from '../Game';


@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  
  game;
  createForm = this.fb.group({
    gameName: [''],
    guestEmails: this.fb.array([
      this.fb.control('')
    ])
  });
  
  constructor(private fb: FormBuilder, private gameService:GameService) {    
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit() {
    console.warn('La partie a bien été créée', this.createForm.value);

    this.game = this.gameService.createGame();
    //TODO envoyer les invitations rediriger vers attente des joueurs.

  }

  get guestEmails():FormArray {
    return this.createForm.get('guestEmails') as FormArray;
  }

  addEmail() {
    if(this.guestEmails.length < 5) //Pas plus de 6 joueurs donc pas plus de 5 invités.
      this.guestEmails.push(this.fb.control(''));
  }

  removeEmail(i:number){
    this.guestEmails.removeAt(i);
  }
}