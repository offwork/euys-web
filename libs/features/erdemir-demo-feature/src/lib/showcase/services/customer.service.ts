import { Injectable } from '@angular/core';
import { FilterMatchMode, LazyLoadEvent } from 'primeng/api';
import { of, timer } from 'rxjs';
import { delay, switchMap } from 'rxjs//operators';
import { Customer, customerData, extractField } from '../models';

type FieldValue = number | string | boolean;
@Injectable()
export class CustomerService {

  constructor() { }

  findAll(event: LazyLoadEvent) {
    const filterFns = [];
    if(event.filters) {
      const { filters } = event;
      for(const filter in filters) {
        let filterFn;
        if((filters[filter]?.value ?? null) !== null) {
          switch (filters[filter].matchMode) {
            case FilterMatchMode.STARTS_WITH:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                return value && value.toString().toLocaleLowerCase('tr').startsWith(filters[filter].value.toString().toLocaleLowerCase('tr'));
              }
              break;
            case FilterMatchMode.ENDS_WITH:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                return value && value.toString().toLocaleLowerCase('tr').endsWith(filters[filter].value.toString().toLocaleLowerCase('tr'));
              }
              break;
            case FilterMatchMode.CONTAINS:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                if(Array.isArray(value)) {
                  return value.includes(filters[filter].value);
                } else return value && value.toString().toLocaleLowerCase('tr').indexOf(filters[filter].value.toString().toLocaleLowerCase('tr')) > -1;
              }
              break;
            case FilterMatchMode.NOT_CONTAINS:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                if(Array.isArray(value)) {
                  return !value.includes(filters[filter].value);
                } else return !value || value.toString().toLocaleLowerCase('tr').indexOf(filters[filter].value.toString().toLocaleLowerCase('tr')) === -1;
              }
              break;
            case FilterMatchMode.EQUALS:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                return value === filters[filter].value;
              }
              break;
            case FilterMatchMode.NOT_EQUALS:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                return value !== filters[filter].value;
              }
              break;
            case FilterMatchMode.IN:
              filterFn = (customer: Customer) => {
                const value = extractField(customer, filter);
                if(Array.isArray(filters[filter].value))
                  return filters[filter].value.includes(value);
                else return false;
              }
              break;
            default:
              break;
          }
          if(filterFn) {
            filterFns.push(filterFn);
          }
        }
      }
    }

    let filtered = customerData;
    for(let filterFn of filterFns) {
      filtered = filtered.filter(filterFn);
    }

    const sorted = filtered;

    let sorter;
    if(event.sortField) {
      sorter = (c1: Customer, c2: Customer) => {
        const [value1, value2] = [extractField(c1, event.sortField), extractField(c2, event.sortField)];
        if(event.sortOrder === 1) {
          // Ascending
          return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        } else return value1 < value2 ? 1 : value1 > value2 ? -1 : 0;
      }
      sorted.sort(sorter);
    }
    if(Array.isArray(event.multiSortMeta)) {
      sorter = (c1: Customer, c2: Customer) => {
        return event.multiSortMeta.map(({field, order}) => {
          const [value1, value2] = [extractField(c1, field), extractField(c2, field)];
          return value1 < value2 ? -order : value1 < value2 ? order : 0;
        }).reduce((p, n) => p ? p : n, 0);
      }

      sorted.sort(sorter);
    }
    return timer(500).pipe(
      switchMap(() => of({
        data: filtered.filter((_, i) => i >= (event.first || 0) && i < (event.first || 0) + event.rows),
        totalRecords: filtered.length
      }))
    )
  }
}
