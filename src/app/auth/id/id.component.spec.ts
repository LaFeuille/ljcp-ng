import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdComponent } from './id.component';

describe('IdComponent', () => {
  let component: IdComponent;
  let fixture: ComponentFixture<IdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
