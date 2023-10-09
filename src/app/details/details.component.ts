import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { S3Service } from '../s3.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  s3 = new AWS.S3();
  sliderData: any;
  attractionsData: any;
  constructor(private s3Service: S3Service, private _detailsService: DetailsService) {

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
    //this.calls3Bucket();
    this.attractionsData.sort(this.compare);
  }

  calls3Bucket() {
    this.s3Service.getImages().then(data => {
      if (data && data.Contents) {
        this.images = data.Contents.map(item => {
          return `https://${'website-imgaes'}.s3.${'eu-north-1'}.amazonaws.com/${item.Key}`;
        });
      }
      console.log("Images : " + this.images);
    });
  }
}
