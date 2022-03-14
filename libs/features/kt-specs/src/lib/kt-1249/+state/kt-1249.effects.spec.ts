import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1249Actions from './kt-1249.actions';
import { Kt1249Effects } from './kt-1249.effects';

describe('Kt1249Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1249Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1249Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1249Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1249Actions.init() });

      const expected = hot('-a-|', { a: Kt1249Actions.loadKt1249Success({ kt1249: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
