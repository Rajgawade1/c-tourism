import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { BookOnlineComponent } from './book-online/book-online.component';

const routes: Routes = [ 
  { path: 'home', component: DetailsComponent },
  { path: 'package/:id', component: PackageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'attractions/:id', component: AttractionsComponent },
  { path: 'book-online/:packageId', component: BookOnlineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
