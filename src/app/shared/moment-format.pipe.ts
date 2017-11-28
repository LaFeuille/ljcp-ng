import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFormat'
})
export class MomentFormatPipe implements PipeTransform {

  transform(value: string|moment.Moment, args?: any): string {
    const format = args && args[0] ? args[0] : 'LL';
    if (typeof value === 'string') {
      return moment(value).format(format);
    } else {
      return value.format(format);
    }
  }

}
