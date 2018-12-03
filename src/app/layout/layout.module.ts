import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    NavComponent
  ]
})
export class LayoutModule {
}
