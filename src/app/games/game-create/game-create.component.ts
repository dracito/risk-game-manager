import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
    gameName: ['', [Validators.required, Validators.maxLength(50)]],
    guestEmails: this.fb.array(
      [this.getEmailControl()],
      [Validators.required]
      )
  });
  isValidFormSubmitted = null;
  
  constructor(private fb: FormBuilder, private gameService:GameService) {    
  }

  private getEmailControl(){
    return this.fb.control('', Validators.email);
  }

  ngOnInit() {
    this.game = new Game();
  }

  onSubmit() {
    console.warn('La partie a bien été créée', this.createForm.value);
    this.isValidFormSubmitted = false;
		if (this.createForm.invalid) {
			return;
		}
		this.isValidFormSubmitted = true;
		this.game = this.createForm.value;
		this.gameService.createGame(this.game);
		this.createForm.reset();
    //TODO envoyer les invitations rediriger vers attente des joueurs.

  }

  get gameName() { return this.createForm.get('gameName'); }

  get guestEmails():FormArray {
    return this.createForm.get('guestEmails') as FormArray;
  }

  addEmail() {
    if(this.guestEmails.length < 5) //Pas plus de 6 joueurs donc pas plus de 5 invités.
      this.guestEmails.push(this.getEmailControl());
  }

  removeEmail(i:number){
    this.guestEmails.removeAt(i);
  }
}