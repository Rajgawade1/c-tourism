import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AttractionsService {
  cdnUrl:string=environment.cdnUrl;
  constructor() { }
  getAttractions(id: string): Observable<any> {
    const heroes = of(this.getAttractionDetails(id));
    return heroes;
  }

  
  private getAttractionDetails(id: string): any {
    if (id === 'Tilari') {
      return {
        "title": "Tilari",
        "points": ["Tilari Nagar is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "imagePath": this.cdnUrl+"attractions/gallary/",
        "images": ["tilari-1.png", "tilari-2.png"]
      };
      
    } else if (id === 'Pargad') {
      return {
        "title": "Pargad",
        "points": ["Pargad is situated at southenrmost part of Chandgad fort and is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "imagePath": this.cdnUrl+"attractions/gallary/",
        "images": ["pargad-1.png", "pargad-2.png", "pargad-3.png"]
      };
    }
    else if (id === 'Amboli') {
      return {
        "title": "Amboli",
        "points": ["Amboli is home to an impressive selection of attractions and experiences, making it well worth a visit."],
        "imagePath": this.cdnUrl+"attractions/gallary/",
        "images": ["amboli-1.png", "amboli-2.png"]
      };
    }


  }
}
