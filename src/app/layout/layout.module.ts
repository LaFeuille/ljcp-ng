import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [
    LayoutComponent,
    ToolbarComponent
  ]
})
export class LayoutModule {
}
