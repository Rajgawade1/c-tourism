import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { S3Service } from '../s3.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  s3 = new AWS.S3();
  sliderData = [{
    "tagline": "Fort Pargad: Where History Meets Majestic Beauty.",
    "src": "assets/slider/pargad.png",
    "alt": "Pargad Image"
  },
  {
    "tagline": "Tilari Ghat: Nature's Gateway to Tranquility.",
    "src": "assets/slider/tilari.png",
    "alt": "Pargad Image"
  },
  {
    "tagline": "Fort Kalanandi: Embrace Nature's Canvas",
    "src": "assets/slider/kalanandi.png",
    "alt": "Pargad Image"
  }];

  attractionsData = [{
    "title": "Tilari",
    "description": "Tilari Nagar is home to an impressive selection of attractions and experiences, making it well worth a visit.",
    "src": "assets/attractions/tilari.png"
  },
  {
    "title": "Pargad",
    "description": "Pargad is a beautiful fort located on the border of Maharashtra and Goa states. The fort is spread across 48 sq km area. The fort has fortified cut walls to its east, west and north sides.",
    "src": "assets/attractions/pargad.png"
  },
  {
    "title": "Amboli",
    "description": "Amboli is a famous hill station in South Maharashtra, India. It is the last hill station before the seaside highlands of Goa. Amboli lies in the Sahyadri Hills",
    "src": "assets/attractions/amboli.png"
  },]
  images: string[] = [];
  constructor(private s3Service: S3Service) { }
  ngOnInit(): void {
    //this.calls3Bucket();
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
