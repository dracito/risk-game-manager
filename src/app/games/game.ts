export class Game{
  id:string;
  token:string;
  name:string;
  createdAt:Date;
  startedAt:Date;
  players:Array<Player>;
  countriesDeck:Array<CountryCard>;
  missionDeck:Array<MissionCard>;
}