import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroHeaderComponent,
  ],
  imports: [
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    HeroHeaderComponent,
  ],
})
export class LayoutModule { }