import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthQuery } from '../state';

import { IdComponent } from './id.component';

describe('IdComponent', () => {
  let component: IdComponent;
  let fixture: ComponentFixture<IdComponent>;
  let query;

  beforeEach(async(() => {
    query = jasmine.createSpyObj('authQuery', ['']);
    query.idToken$.and.return(undefined);
    TestBed.configureTestingModule({
      declarations: [IdComponent],
      providers: [{
        provide: AuthQuery,
        use: query
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
