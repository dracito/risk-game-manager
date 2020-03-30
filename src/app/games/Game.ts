import { DeckCard } from "../cards/DeckCard";
import { Player } from "../players/Player";

export class Game{
  id:string;
  token:string;
  name:string;
  createdAt:Date;
  startedAt:Date;
  players:Array<Player>;
  deck:Array<DeckCard>;//Deck used during playing, do not use for game preparation (use only territories cards without wild card for game board building).
  state:GameState;
}