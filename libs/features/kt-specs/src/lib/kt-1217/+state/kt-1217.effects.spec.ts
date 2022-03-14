import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1217Actions from './kt-1217.actions';
import { Kt1217Effects } from './kt-1217.effects';

describe('Kt1217Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1217Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1217Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1217Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1217Actions.init() });

      const expected = hot('-a-|', { a: Kt1217Actions.loadKt1217Success({ calYuzdeUzama: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
