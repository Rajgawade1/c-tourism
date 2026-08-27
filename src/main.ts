/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, NgbCarouselModule, NgIf, NgOptimizedImage, FormsModule),
        provideHttpClient(withInterceptors([authInterceptor]) // Registers functional interceptors
        )
    ]
})
  .catch(err => console.error(err));
