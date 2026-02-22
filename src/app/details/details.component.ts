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
  tourPackages: any;
  chunkedTourPackages: any[] = [];
  chunkedAttractions: any[] = [];

  constructor(private _detailsService: DetailsService) {

    this._detailsService.getSliderDetails().subscribe(sliderDetails => {
      this.sliderData = sliderDetails;
    });
    this._detailsService.getAttractionsDetails().subscribe(attractionsData => {
      this.attractionsData = attractionsData;
      this.chunkedAttractions = this.chunkArray(this.attractionsData, 3);
    });
    this._detailsService.getTourPackages().subscribe(tourPackages => {
      this.tourPackages = tourPackages;
      this.chunkedTourPackages = this.chunkArray(this.tourPackages, 3);
    });


  }

  chunkArray(array: any[], size: number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
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
