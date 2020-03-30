import { DeckCard } from "../DeckCard";

export class TerritoryCard extends DeckCard{

  public static fromJson(json: Object): TerritoryCard {
        return new TerritoryCard(
            json['territory'],
            json['continent'],
            json['type']
        );
    }

  constructor(
    public territory: string,
    public continent: string,
    public type: string,
  ) {
    super();
  }
}