import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1242Actions from './kt-1242.actions';
import { Kt1242Effects } from './kt-1242.effects';

describe('Kt1242Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1242Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1242Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1242Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1242Actions.init() });

      const expected = hot('-a-|', { a: Kt1242Actions.loadKt1242Success({ kt1242: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
