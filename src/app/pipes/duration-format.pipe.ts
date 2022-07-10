import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {
  transform(value: number): string {
    let hours = (value / 60);
    let rhours : any = Math.floor(hours).toString();
    let min = (hours - rhours) * 60;
    let rminutes = Math.round(min).toString();
    if(rhours < 1) {
      return rminutes +  'min';
    } else {
      return rhours + 'h ' + rminutes +  'min';
    }
  }

}
