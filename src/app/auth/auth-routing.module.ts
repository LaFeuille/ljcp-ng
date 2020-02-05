import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdComponent } from './id/id.component';

const routes: Routes = [
  {
    path: '',
    component: IdComponent,
    outlet: 'user'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {
}
