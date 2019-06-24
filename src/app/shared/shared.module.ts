import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentFormatPipe } from './moment-format.pipe';
import { MomentFromNowPipe } from './moment-from-now.pipe';
import { MomentPipe } from './moment.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MomentFormatPipe,
    MomentFromNowPipe,
    MomentPipe
  ],
  declarations: [
    MomentFormatPipe,
    MomentFromNowPipe,
    MomentPipe
  ]
})
export class SharedModule {
}
