import { DeckCard } from "../DeckCard";
import { MissionCard } from "../MissionCard";

export class Player{
  id:string;
  name:string;
  createdAt:Date;
  hand:Array<DeckCard>;
  mission:MissionCard;

  constructor(){
    this.createdAt = new Date(Date.now());
    this.hand = new Array<DeckCard>();    
  }
}