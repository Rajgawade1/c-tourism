import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private _router: Router){}

  title = 'c-tourism';
  ngOnInit() {
    this._router.navigate(['home']);
  }
}
