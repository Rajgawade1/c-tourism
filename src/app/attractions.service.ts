import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor() { }
  getAttractions(id: string): Observable<any> {
    const heroes = of(this.getAttractionDetails(id));
    return heroes;
  }

  private getAttractionDetails(id: string): any {
    if (id === 'tilari') {
      return {
        "title": "Tilari",
        "points": ["Tilari Nagar is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "images": ["assets/pargad.png","assets/tilari.png"]
      };
    } else if (id === 'pargad') {
      return {
        "title": "Pargad",
        "points": ["Pargad is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "images": ["assets/pargad.png"]
      };
    }
    else if (id === 'amboli') {
      return {
        "title": "Amboli",
        "points": ["Amboli is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "images": ["assets/pargad.png"]
      };
    }


  }
}
