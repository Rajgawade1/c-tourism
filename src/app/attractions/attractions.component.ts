import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../attractions.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  constructor(private _attractionsService: AttractionsService, private _activatedroute: ActivatedRoute) { }
  attractionDetails: any;
  id: string = "";

  ngOnInit(): void {
    this.id = this.id = this._activatedroute.snapshot.params["id"];
    this._attractionsService.getAttractions(this.id).subscribe(attraction => {
      this.attractionDetails = attraction;
    });
  }

}
