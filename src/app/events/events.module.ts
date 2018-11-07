import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatProgressBarModule } from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EventsInMemoryDbService } from './events-in-memory-db.service';
import { EventsRoutingModule } from './events-routing.module';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { EventsDataService, eventsPaginatorProvider } from './state';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    HttpClientModule,
    environment.production ? [] :
      HttpClientInMemoryWebApiModule.forFeature(EventsInMemoryDbService, {apiBase: ''}),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    CreateComponent,
    IndexComponent,
    ListComponent
  ],
  providers: [
    EventsDataService,
    eventsPaginatorProvider
  ]
})
export class EventsModule {
}
