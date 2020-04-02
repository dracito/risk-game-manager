import { DeckCard } from "../cards/DeckCard";
import { MissionCard } from "../cards/missions/MissionCard";

export class Player{
  
  public static fromJson(json: Object): Player {
    return new Player(
        json['id'],
        json['name']
    );
  }

  id:string;
  name:string;
  createdAt:Date;
  hand:Array<DeckCard>;
  mission:MissionCard;

  constructor(id:string, name:string){
    this.id = id;
    this.name = name;
    this.createdAt = new Date(Date.now());
    this.hand = new Array<DeckCard>();
  }
}