import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNow'
})
export class MomentFromNowPipe implements PipeTransform {

  transform(value: string|moment.Moment, args?: any): string {
    if (typeof value === 'string') {
      return moment(value).fromNow();
    } else {
      return value.fromNow();
    }
  }

}
