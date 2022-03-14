import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1245Actions from './kt-1245.actions';
import { Kt1245Effects } from './kt-1245.effects';

describe('Kt1245Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1245Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1245Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1245Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1245Actions.init() });

      const expected = hot('-a-|', { a: Kt1245Actions.loadKt1245Success({ kt1245: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
