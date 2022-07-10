import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/app.component';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, property: string): Array<any> {
    return value.sort((a, b) => a[`${property}`].getTime() > b[`${property}`].getTime() ? 1 : -1);
  }

}
