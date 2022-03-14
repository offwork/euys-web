import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ktUrun',
})
export class UrunPipe implements PipeTransform {
  transform(value: string, args: string): string {
    return [value, args].join(' ');
  }
}
