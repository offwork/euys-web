/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectOption } from '../model/dynamic-form-control';

@Pipe({ name: 'selectOptions' })
export class SelectOptionsPipe implements PipeTransform {
  transform(options: any, props: string[]): Observable<SelectOption[]> {
    if (!(options instanceof Observable)) {
      options = observableOf(options);
    }
    return (options as Observable<any>).pipe(map((val) => this.__optionsMapping(val, props)));
  }

  __optionsMapping(options: Array<Record<string, unknown>>, props: string[]): SelectOption[] {
    return options.map((item) => ({
      label: item[props[0]] as string,
      value: item[props[1]],
    }));
  }
}
