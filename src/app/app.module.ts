import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WpApiModule, WpApiLoader, WpApiStaticLoader } from 'wp-api-angular';

import { httpInterceptorProviders } from './http-interceptors';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, environment.url, /* namespace is optional, default: '/wp/v2' */);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    }),
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
