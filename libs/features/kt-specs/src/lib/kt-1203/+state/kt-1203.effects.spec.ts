import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1203Actions from './kt-1203.actions';
import { Kt1203Effects } from './kt-1203.effects';

describe('Kt1203Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1203Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1203Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1203Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1203Actions.init() });

      const expected = hot('-a-|', { a: Kt1203Actions.loadKt1203Success({ ikmalSicaklik: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
