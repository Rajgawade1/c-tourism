import { Component, OnInit } from '@angular/core';
//import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  //s3 = new AWS.S3();
  ngOnInit(): void {

    // AWS.config.update({
    //   region: 'eu-north-1',
    //   accessKeyId: 'AKIASWEQOMQ4SRFW24QV',
    //   secretAccessKey: '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'
    // });
    // var bucket = (new AWS.S3({
    //   params: {
    //     Bucket: 'website-imgaes',
    //     Key: 'Slider-Images/Untitled-1.jpg',
    //     contetType: ''
    //   }
    // }));
    // var params = {
    //   Bucket: 'website-imgaes',
    //   //Key: 'Slider-Images/Untitled-1.jpg',
    // }

    // bucket.getSignedUrl('listObjectsV2', params, (err, data) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(data);
    //   }
    // });
  }
}
