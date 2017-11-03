import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HealthService } from './health.service';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    SharedModule
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
