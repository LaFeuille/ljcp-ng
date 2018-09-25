import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { EventsDataService } from '../state/events-data.service';
import { ListComponent } from '../list/list.component';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent,
        ListComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatProgressSpinnerModule,
        SharedModule
      ],
      providers: [
        EventsDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
