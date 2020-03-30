import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent implements OnInit {

  missions;

  constructor(private missionsService: MissionsService) { }

  ngOnInit() {
    this.missionsService.getMissions().subscribe(
      missions => this.missions = missions
    );
  }
}