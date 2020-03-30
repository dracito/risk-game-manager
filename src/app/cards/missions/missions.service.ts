import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MissionCard } from './MissionCard';

@Injectable()
export class MissionsService {
  private missionsDeck:Observable<MissionCard[]>;
   
  public constructor(private http: HttpClient) {
  }

  private getJSON(): Observable<any> {
      return this.http.get("../../../assets/cards-missions.json");
  }

  public getMissions(): Observable<MissionCard[]>{
    return this.getJSON().pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => MissionCard.fromJson(jsonItem))
      )
    );    
  }

  public getMissionsDeck():Observable<MissionCard[]>{
    if(!this.missionsDeck)
      this.missionsDeck = this.getMissions();
    return this.missionsDeck;
  }
}