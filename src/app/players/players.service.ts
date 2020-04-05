import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Player } from './Player';

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
    {
      return new Player({id:"1",name:"NomPlayer1TODO", email:"emailTODO@joueur1.com"});
    }
  }  
}