import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentFormatPipe } from './moment-format.pipe';
import { MomentFromNowPipe } from './moment-from-now.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MomentFormatPipe,
    MomentFromNowPipe
  ],
  declarations: [
    MomentFormatPipe,
    MomentFromNowPipe
  ]
})
export class SharedModule {
}
