import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class LayoutModule { }