import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1250Actions from './kt-1250.actions';
import { Kt1250Effects } from './kt-1250.effects';

describe('Kt1250Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1250Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1250Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1250Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1250Actions.init() });

      const expected = hot('-a-|', { a: Kt1250Actions.loadKt1250Success({ kt1250: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
