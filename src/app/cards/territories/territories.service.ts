import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TerritoryCard } from './TerritoryCard';

@Injectable()
export class TerritoriesService {
  private territoriesDeck:Observable<TerritoryCard[]>;

  public constructor(private http: HttpClient) {
  }

  private getJSON(): Observable<any> {
      return this.http.get("../../../assets/cards-territories.json");
  }

  public getTerritories(): Observable<TerritoryCard[]>{
    return this.getJSON().pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => TerritoryCard.fromJson(jsonItem))
      )
    );    
  }

  public getTerritoriesDeck():Observable<TerritoryCard[]>{
    if(!this.territoriesDeck)
      this.territoriesDeck = this.getTerritories();
    return this.territoriesDeck;
  }
}