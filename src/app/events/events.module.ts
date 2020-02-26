import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    environment.inMemory ?
      HttpClientInMemoryWebApiModule.forFeature(EventsInMemoryDbService, {apiBase: ''}) : [],
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
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
