import { Pipe, PipeTransform } from '@angular/core';
import { cloneDeep } from 'lodash';

@Pipe({ name: 'cloneArray' })
export class CloneArrayPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any[]): any[] {
    return cloneDeep(value);
  }
}
