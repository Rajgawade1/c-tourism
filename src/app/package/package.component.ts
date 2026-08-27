import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-package',
    templateUrl: './package.component.html',
    styleUrls: ['./package.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor]
})
export class PackageComponent implements OnInit{

  packageDetails:any;
  id:string="";
  constructor(private _packagesService:PackagesService,private _activatedroute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.id = this._activatedroute.snapshot.params["id"];
    this._packagesService.getPacakges(this.id).subscribe(packageDetails=>{
        this.packageDetails=packageDetails;
    });
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }

  itinerary = [
    {
      "day": "Day1",
      "details": ["Details of day1 itinerary"]
    },
    { "day": "Day2", "details": ["Details of day2 itinerary"] }
  ];

}
