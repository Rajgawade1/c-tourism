import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../attractions.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgbModal, NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { ReplaceExtPipe } from '../replace-ext-pipe.pipe';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-attractions',
    templateUrl: './attractions.component.html',
    styleUrls: ['./attractions.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, NgbCarousel, NgbSlide, ReplaceExtPipe]
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
