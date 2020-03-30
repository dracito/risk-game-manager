import { DeckCard } from "../DeckCard";
import { MissionCard } from "../MissionCard";

export class Player{
  id:string;
  name:string;
  createdAt:Date;
  hand:Array<DeckCard>;
  mission:MissionCard;
}