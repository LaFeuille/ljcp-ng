import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';
import { AuthQuery } from '../state';

import { IdComponent } from './id.component';

describe('IdComponent', () => {
  let component: IdComponent;
  let fixture: ComponentFixture<IdComponent>;
  let query;

  beforeEach(async(() => {
    const idToken = {
      sub: '1234567890',
      iss: 'https://accounts.google.com',
      aud: '123-abc.apps.googleusercontent.com',
      iat: 233366400,
      exp: 233370000,
      name: 'Jan Jansen',
      given_name: 'Jan',
      family_name: 'Jansen',
      email: 'jan@gmail.com',
      locale: 'en_US'
    };
    query = {idToken$: observableOf(idToken)};

    TestBed.configureTestingModule({
      declarations: [IdComponent],
      providers: [{
        provide: AuthQuery,
        useValue: query
      }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
