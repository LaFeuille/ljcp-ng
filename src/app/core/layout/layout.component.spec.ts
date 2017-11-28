import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        SidenavComponent,
        ToolbarComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
