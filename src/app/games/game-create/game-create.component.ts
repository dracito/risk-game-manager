import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { GameService } from '../game.service';
import { Game } from '../Game';
import { Player } from '../../players/Player';


@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {
  
  createForm = this.fb.group({
    gameName: ['', 
      [Validators.required, Validators.maxLength(50)]],
    guestEmails: this.fb.array(
      [this.getEmailControl()],
      [Validators.required]
    )
  });
  isValidFormSubmitted = null;
  
  constructor(private fb: FormBuilder, private gameService:GameService) {    
  }

  private getEmailControl():FormControl{
    return this.fb.control('', [Validators.email, Validators.required]);
  }

  ngOnInit() {
  }

  get gameName() { return this.createForm.get('gameName'); }

  get guestEmails():FormArray {
    return this.createForm.get('guestEmails') as FormArray;
  }

  addEmail() {
    if(this.guestEmails.length < 5) //6 joueurs max donc pas plus de 5 invités.
      this.guestEmails.push(this.getEmailControl());
  }

  removeEmail(i:number){
    this.guestEmails.removeAt(i);
  }

  onSubmit() {
    
    this.isValidFormSubmitted = false;
		if (this.createForm.invalid) {
			return;
		}
		this.isValidFormSubmitted = true;
    let game:Game = new Game();
    game.name = this.gameName.value;
    if(!game.players)
      game.players = new Array<Player>();
    let player:Player = new Player();
    game.players.push

		this.gameService.saveGame(this.game);
    console.warn('La partie a bien été créée', this.createForm.value);
    console.warn('La partie', game);
		//this.createForm.reset();
    //TODO envoyer les invitations rediriger vers attente des joueurs.
  }
}