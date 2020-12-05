import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AboutComponent } from './shared/components/about/about.component';
import { CaraouselComponent } from './shared/components/caraousel/caraousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    CaraouselComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
