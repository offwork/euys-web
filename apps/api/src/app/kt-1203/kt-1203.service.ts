import { SckHad2IkmalSicaklik } from '@euys/api-interfaces';
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable()
export class Kt1203Service implements OnModuleDestroy {
  _endSubscription$ = new Subject<boolean>();
  _entities = new BehaviorSubject<SckHad2IkmalSicaklik[]>(null);
  entities$ = this._entities.asObservable();

  constructor() {
    this._entities.next([]);
  }

  createEntity(entity: SckHad2IkmalSicaklik) {
    entity.id = this._uuidv4();
    entity.etag = this._uuidv4();
    this._entities.next([...this._entities.getValue().concat(entity)]);
  }

  updateEntity(entity: SckHad2IkmalSicaklik) {
    this._entities.next(
      this._entities.getValue().map((val) => {
        if (val.id === entity.id) {
          val = entity;
        }
        return val;
      })
    );
  }

  fetchAllEntities() {
    let entities: SckHad2IkmalSicaklik[];
    this.entities$.pipe(takeUntil(this._endSubscription$)).subscribe((data) => (entities = data));
    return entities;
  }

  onModuleDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  _uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
