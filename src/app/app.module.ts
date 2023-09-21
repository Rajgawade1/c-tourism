import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AttractionsComponent } from './attractions/attractions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PackageComponent,
    AboutComponent,
    AttractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
