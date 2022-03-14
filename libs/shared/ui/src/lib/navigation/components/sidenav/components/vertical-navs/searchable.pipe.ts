import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchable',
})
export class Searchable implements PipeTransform {
  transform(value: string, args: string): string {
    return [value.split('.').pop().toUpperCase(), args].join(' - ');
  }
}
