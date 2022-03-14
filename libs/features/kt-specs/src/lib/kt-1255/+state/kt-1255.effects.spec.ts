import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1255Actions from './kt-1255.actions';
import { Kt1255Effects } from './kt-1255.effects';

describe('Kt1255Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1255Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1255Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1255Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1255Actions.init() });

      const expected = hot('-a-|', { a: Kt1255Actions.loadKt1255Success({ kt1255: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
