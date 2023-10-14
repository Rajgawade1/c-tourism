import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  sliderData: any;
  attractionsData: any;
  constructor(private _detailsService: DetailsService) {

    this._detailsService.getSliderDetails().subscribe(sliderDetails => {
      this.sliderData = sliderDetails;
    });
    this._detailsService.getAttractionsDetails().subscribe(attractionsData => {
      this.attractionsData = attractionsData;
    });


  }

  compare(a: any, b: any) {
    if (a.order < b.order)
      return -1;
    else if (a.order > b.order)
      return 1;
    else
      return 0;
  }

  images: string[] = [];

  ngOnInit(): void {
    this.attractionsData.sort(this.compare);
  }
}
