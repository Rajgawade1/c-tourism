import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { SortSilderPipePipe } from './sort-silder-pipe.pipe';
import { BookOnlineComponent } from './book-online/book-online.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PackageComponent,
    AboutComponent,
    AttractionsComponent,
    SortSilderPipePipe,
    BookOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgIf,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
