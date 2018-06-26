import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HealthService } from './health.service';
import { IndexComponent } from './index/index.component';
import { StatusRoutingModule } from './status-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule,
    SharedModule,
    StatusRoutingModule
  ],
  declarations: [
    IndexComponent
  ],
  providers: [
    HealthService
  ]
})
export class StatusModule {
}
