import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Line } from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormFieldSchema } from '../../forms/impl/form-field-schema';

@Component({
  selector: 'euys-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'euys-filter-bar' },
})
export class FilterBarComponent implements OnDestroy, OnInit {
  @Input() isRecord = false;
  @Input() formFields!: FormFieldSchema[];
  @Input() productLines!: Observable<Line[]>;
  @Input() displayPreviousyear = false;
  @Output() startSearching = new Subject<Record<string, unknown>>();
  _fieldGroup!: Record<string, unknown>;
  _endSubscription$ = new Subject<boolean>();

  sendFormValue() {
    if (Object.values(this._fieldGroup).every(value => value !== null)) {
      this.startSearching.next(this._fieldGroup);
    }
  }

  ngOnInit() {
    this._fieldGroup = this.formFields.reduce((acc, cur) => {
      cur.formControl.value$
        .pipe(takeUntil(this._endSubscription$))
        .subscribe(val => {
          if (cur.inputId === 'month') {
            val = new Date(val).getMonth() + 1;
          }
          if (cur.inputId === 'year') {
            // note that by default it is set to `1970`
            val =
              new Date(val).getFullYear() > 1970
                ? new Date(val).getFullYear()
                : null;
          }
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          acc[cur.inputId] = val;
        });
      return acc;
    }, {});
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
