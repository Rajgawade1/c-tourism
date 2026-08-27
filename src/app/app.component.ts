import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit{
  constructor(private _router: Router){}

  title = 'c-tourism';
  ngOnInit() {
    this._router.navigate(['home']);
  }
}
