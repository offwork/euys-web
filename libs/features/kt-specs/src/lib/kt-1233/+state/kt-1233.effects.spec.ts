import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1233Actions from './kt-1233.actions';
import { Kt1233Effects } from './kt-1233.effects';

describe('Kt1233Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1233Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1233Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1233Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1233Actions.init() });

      const expected = hot('-a-|', { a: Kt1233Actions.loadKt1233Success({ kt1233: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
