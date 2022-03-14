import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1202Actions from './kt-1202.actions';
import { Kt1202Effects } from './kt-1202.effects';

describe('Kt1202Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1202Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1202Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1202Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1202Actions.init() });

      const expected = hot('-a-|', { a: Kt1202Actions.loadKt1202Success({ kt1202: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
