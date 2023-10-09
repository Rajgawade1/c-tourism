import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getSliderDetails(): Observable<any> {
    const heroes = of(this.getSliderData());
    return heroes;
  }
  getAttractionsDetails(): Observable<any> {
    const heroes = of(this.geAattractionsData());
    return heroes;
  }
  private getSliderData(): any {
    return [{
      "tagline": "Fort Pargad: Where History Meets Majestic Beauty.",
      "src": "assets/slider/pargad.png",
      "alt": "Pargad Image",
      "order": 3
    },
    {
      "tagline": "Tilari Ghat: Nature's Gateway to Tranquility.",
      "src": "assets/slider/tilari.png",
      "alt": "Tilari Image",
      "order": 1
    },
    {
      "tagline": "Fort Kalanandi: Embrace Nature's Canvas",
      "src": "assets/slider/kalanandi.png",
      "alt": "Kalanandi Image",
      "order": 2
    }];
  }
  private geAattractionsData():any {
    return [
      {
        "title": "Pargad",
        "description": "Pargad is a beautiful fort located on the border of Maharashtra and Goa states. The fort is spread across 48 sq km area. The fort has fortified cut walls to its east, west and north sides.",
        "src": "assets/attractions/pargad.png",
        "order": 2
      },
      {
        "title": "Tilari",
        "description": "Tilari Nagar is home to an impressive selection of attractions and experiences, making it well worth a visit.",
        "src": "assets/attractions/tilari.png",
        "order": 1
      },
      {
        "title": "Amboli",
        "description": "Amboli is a famous hill station in South Maharashtra, India. It is the last hill station before the seaside highlands of Goa. Amboli lies in the Sahyadri Hills",
        "src": "assets/attractions/amboli.png",
        "order": 3
      },
    ];
  }
}
