import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../Game';

import { FormBuilder, ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  game;

  createForm = new FormGroup({
    nameControl: new FormControl(''),
    emails: this.fb.array([
      this.fb.control('')
    ])
  });
  
  constructor(private fb: FormBuilder, private gameService:GameService) {     
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit() {
    console.warn('La partie a bien été créée', this.createForm.value["nameControl"]);

    this.game = this.gameService.createGame();
    this.createForm.reset();
    //TODO redirigé vers l'invitation de joueurs (ou demander sur ce formulaire puis attente des joueurs) 

  }

  get emails() {
    return this.createForm.get('emails') as FormArray;
  }
  
  addEmails() {
    if(this.emails.length < 5) //Pas plus de 6 joueurs donc pas plus de 5 invités.
      this.emails.push(this.fb.control(''));
  }

  removeEmail(i){
    this.emails.removeAt(i);
  }
}