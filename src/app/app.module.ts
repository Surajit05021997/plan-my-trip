import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanTripModule } from './feature/plan-trip/plan-trip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    PlanTripModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
