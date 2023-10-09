import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../attractions.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  constructor(private _attractionsService: AttractionsService, private _activatedroute: ActivatedRoute,private _modalService: NgbModal) { }
  attractionDetails: any;
  id: string = "";
  closeResult: string="";
  
  ngOnInit(): void {
    this.id = this.id = this._activatedroute.snapshot.params["id"];
    this._attractionsService.getAttractions(this.id).subscribe(attraction => {
      this.attractionDetails = attraction;
    });
  }
  openFullscreen(content: any) {
    this._modalService.open(content, { fullscreen: true });
  }
}
