import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1232Actions from './kt-1232.actions';
import { Kt1232Effects } from './kt-1232.effects';

describe('Kt1232Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1232Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1232Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1232Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1232Actions.init() });

      const expected = hot('-a-|', { a: Kt1232Actions.loadKt1232Success({ kt1232: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
