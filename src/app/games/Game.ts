import { DeckCard } from "../cards/DeckCard";
import { Player } from "../players/Player";
import { Observable } from "rxjs";
import { GameState } from "./GameState";

interface IGame {
  id?:string;
  token?:string;
  name?:string;
  createdAt?:Date;
  startedAt?:Date;
  players?:Player[];
  deck?:DeckCard[];
  state?:GameState;
}


export class Game{
  id?:string;
  token?:string;
  name?:string;
  createdAt?:Date;
  startedAt?:Date;
  players?:Player[];
  deck?:DeckCard[];//Deck used during playing, do not use for game preparation (preparation use only territories cards without wild card for game board building).
  state?:GameState;

  constructor();
  constructor(obj: IGame)
  constructor(obj?: any) {
    this.id = obj && obj.id || 0
    this.token = obj && obj.token || this.makeToken(10);
    this.name = obj && obj.name || ""
    this.createdAt = obj && obj.createdAt || new Date(Date.now())
    this.startedAt = obj && obj.startedAt || null
    this.players = obj && obj.players || new Array<Player>()
    this.deck = obj && obj.deck || new Array<DeckCard>()
    this.state = obj && obj.state || GameState.Created;
    ;
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