import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from '../list/list.component';
import { EventsDataService, eventsPaginatorProvider } from '../state';

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
        MatProgressBarModule,
        MatSnackBarModule,
        SharedModule
      ],
      providers: [
        EventsDataService,
        eventsPaginatorProvider
      ]
    }).compileComponents();
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
