import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment, MomentFormatSpecification } from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string | Moment, format?: MomentFormatSpecification): any {
    return moment(value, format);
  }

}
