import { NgModule } from '@angular/core';
import { PlanTripComponent } from './pages/plan-trip/plan-trip.component';

@NgModule({
  declarations: [
    PlanTripComponent,
  ],
  exports: [
    PlanTripComponent,
  ],
})
export class PlanTripModule { }
