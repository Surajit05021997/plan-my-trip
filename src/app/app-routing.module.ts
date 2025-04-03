import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanTripComponent } from './feature/plan-trip/pages/plan-trip/plan-trip.component';

const routes: Routes = [
  {
    path: 'plan-trip',
    component: PlanTripComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
