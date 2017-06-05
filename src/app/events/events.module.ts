import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EventsService } from './events.service';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'new',
    component: CreateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    CreateComponent,
    IndexComponent,
    ListComponent
  ],
  providers: [
    EventsService
  ]
})
export class EventsModule {
}
