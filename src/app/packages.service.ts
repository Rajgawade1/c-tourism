import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }
  getPacakges(id: string): Observable<any> {
    const heroes = of(this.getPacakgeDetails(id));
    return heroes;
  }

  private getPacakgeDetails(id: string): any {
    if (id === 'package1') {
      return [
        {
          "day": "Day1",
          "details": ["Details of day1 itinerary"]
        },
        { "day": "Day2", "details": ["Details of day2 itinerary"] }
      ];
    } else if (id === 'package2') {
      return [
        {
          "day": "Day1",
          "details": ["Details of day1 itinerary"]
        },
        { "day": "Day2", "details": ["Details of day2 itinerary"] },
        { "day": "Day3", "details": ["Details of day2 itinerary"] }
      ];
    }
    else if (id === 'package3') {
      return [
        {
          "day": "Day1",
          "details": ["Details of day1 itinerary"]
        }
      ];
    }


  }
}
