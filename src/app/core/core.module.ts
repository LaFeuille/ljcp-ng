import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'events',
        loadChildren: '../events/events.module#EventsModule'
      },
      {
        path: 'status',
        loadChildren: '../status/status.module#StatusModule'
      },
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class CoreModule {
}
