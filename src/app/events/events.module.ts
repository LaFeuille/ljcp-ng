import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
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
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
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
