import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroHeaderComponent,
  ],
  imports: [
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    HeroHeaderComponent,
  ],
})
export class LayoutModule { }