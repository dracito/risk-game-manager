import { Injectable } from '@angular/core';
import { Player } from './Player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayersService {
  
  myPlayer: Player;

  private players:Observable<Player[]>;
  
  constructor(private http: HttpClient) { }

  private getJSON(): Observable<any> {
      return this.http.get("../../../assets/players.json");
  }

  public getPlayers(): Observable<Player[]>{
    return this.getJSON().pipe(
      map(
        (jsonArray: Object[]) => jsonArray.map(jsonItem => Player.fromJson(jsonItem))
      )
    );    
  }

  //Get player associated with my user session
  public getMyPlayer(/*user:User*/):Player{
    //TODO when User session and auth done
    if(this.myPlayer)
      return this.myPlayer;
    else
      return new Player("1", "NomPlayer1TODO", "emailTODO@joueur1.com");
  }  
}