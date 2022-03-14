import { Component } from '@angular/core';
import { LazyLoadEvent, SortMeta } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { finalize, startWith } from 'rxjs/operators';
import { Customer } from '../../models';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'euys-table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss'],
})
export class TableShowcaseComponent {
  customers: Customer[] = [];
  totalRecords = 0;
  loading$: Observable<boolean>;
  multiSortMeta: SortMeta[] = [];
  private loadingSubject = new Subject<boolean>();
  representatives = [
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
  ];
  verifiedOptions = [
    { value: true, label: 'VERIFIED', class: 'pi true-icon pi-check-circle' },
    { value: false, label: 'UNVERIFIED', class: 'pi false-icon pi-times-circle' },
  ];
  constructor(private readonly customerService: CustomerService) {
    this.loading$ = this.loadingSubject.pipe(startWith(true));
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loadingSubject.next(true);
    this.customerService
      .findAll(event)
      .pipe(
        finalize(() => {
          this.loadingSubject.next(false);
        })
      )
      .subscribe(({ totalRecords, data }) => {
        this.totalRecords = totalRecords;
        this.customers = data;
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterCallback(event: any) {
    console.log(event);
  }
}
