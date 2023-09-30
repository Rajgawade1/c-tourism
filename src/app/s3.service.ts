import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';


@Injectable({
  providedIn: 'root'
})
export class S3Service {
  private s3: AWS.S3;
  constructor() { 
    this.s3 = new AWS.S3({
      accessKeyId: 'test',
      secretAccessKey: 'test',
      region: 'eu-north-1',

    });
  }

  public getImages(): Promise<AWS.S3.ListObjectsOutput> {
    return this.s3.listObjectsV2({
      Bucket: 'website-imgaes',
    }).promise();
  }
}
