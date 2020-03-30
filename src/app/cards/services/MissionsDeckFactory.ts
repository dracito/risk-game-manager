import { HttpClient } from '@angular/common/http';
import { MissionCard } from "../missions/MissionCard";
import { map } from 'rxjs/operators';


export class MissionsDeckFactory{
  private missionsDeck:Array<MissionCard>;

  private constructor(
    private http: HttpClient
  ) {}

  private createMissioonsDeck(){
    this.missionsDeck = this.http.get('../../../assets/shipping.json').pipe(
      map(res => res.json())
      map((resp: MissionCard) => new MissionCard(resp) ) ));
    MissionCard m1 = new MissionCard()
    missionDeck = []
  }

  public getMissionsDeck(){
    if(!missionsDeck)
      this.missionsDeck = createMissionsDeck();

    return this.missionsDeck;
  }

    getShippingPrices() {
    return 
  }
}