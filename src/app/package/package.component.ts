import { Component } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {
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
