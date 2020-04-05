import { DeckCard } from "../cards/DeckCard";
import { MissionCard } from "../cards/missions/MissionCard";


interface IPlayer {
  id?:string;
  name?:string;
  email?:string;
  createdAt?:Date;
  hand?:Array<DeckCard>;
  mission?:MissionCard;
}

export class Player{
  
  public static fromJson(json: Object): Player {    
    return new Player(
      {
        id:json['id'],
        name:json['name'],
        email:json['email']
      }
    );
  }

  id?:string;
  name?:string;
  email?:string;
  createdAt?:Date;
  hand?:Array<DeckCard>;
  mission?:MissionCard;

  constructor();
  constructor(obj: IPlayer)
  constructor(obj?: any) {
    this.id = obj && obj.id || 0
    this.name = obj && obj.name || ""
    this.email = obj && obj.email || ""
    this.createdAt = obj && obj.createdAt || new Date(Date.now())
    this.mission = obj && obj.mission || new Array<DeckCard>()
    ;
  }
}