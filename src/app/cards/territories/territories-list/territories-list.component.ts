import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-territories-list',
  templateUrl: './territories-list.component.html',
  styleUrls: ['./territories-list.component.css']
})
export class TerritoriesListComponent implements OnInit {

  territories;

  constructor(private territoriesService: TerritoriesService) { }

  ngOnInit() {
    this.territoriesService.getTerritories().subscribe(
      territories => this.territories = territories
    );
  }
}