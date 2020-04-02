import { DeckCard } from "../DeckCard";

export class MissionCard extends DeckCard{
  public static fromJson(json: Object): MissionCard {
    return new MissionCard(
        json['description']
    );
  }

  constructor(public description: string) {
    super();
  }
}