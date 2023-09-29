import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  s3 = new AWS.S3();
  taglines={
    "pargad":"Fort Pargad: Where History Meets Majestic Beauty.",
    "tilari":"Tilari Ghat: Nature's Gateway to Tranquility.",
    "greenValley":"Green Valley Waterfall: Nature's Cascading Symphony."
  }
  ngOnInit(): void {
    //this.calls3Bucket();
  }

  calls3Bucket() {
    AWS.config.update({
      region: 'eu-north-1',
      accessKeyId: 'AKIASWEQOMQ4SRFW24QV',
      secretAccessKey: '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'
    });
    var bucket = (new AWS.S3({
      params: {
        Bucket: 'website-imgaes',
        Key: 'Slider-Images/Untitled-1.jpg',
        contetType: ''
      }
    }));
    var params = {
      Bucket: 'website-imgaes',
      //Key: 'Slider-Images/Untitled-1.jpg',
    }

    bucket.listObjects(params, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data);
      }
    });
    // bucket.getSignedUrl('listObjectsV2', params, (err, data) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(data);
    //   }
    // });
  }
}
