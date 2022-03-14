import { Pipe, PipeTransform } from '@angular/core';
import { EUYS_ENUMS } from '@euys/api-interfaces';

@Pipe({
  name: 'euysEnum',
})
export class EuysEnumPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any): any {
    for (const _enum of EUYS_ENUMS) {
      const found = Object.entries(_enum).find(([, val]) => val === value);
      if (found) {
        return found[0];
      }
    }
    return '';
  }
}
