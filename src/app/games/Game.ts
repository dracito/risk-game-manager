import { DeckCard } from "../cards/DeckCard";
import { Player } from "../players/Player";
import { Observable } from "rxjs";
import { GameState } from "./GameState";

export class Game{
  id:string;
  token:string;
  name:string;
  createdAt:Date;
  startedAt:Date;
  players:Player[];
  deck:DeckCard[];//Deck used during playing, do not use for game preparation (preparation use only territories cards without wild card for game board building).
  state:GameState;

  constructor(){
    this.token = this.makeToken(10);
    this.createdAt = new Date(Date.now());
    this.state = GameState.Created;
  }
  
  private makeToken(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}