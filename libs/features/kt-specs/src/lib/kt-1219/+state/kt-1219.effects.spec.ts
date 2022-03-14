import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1219Actions from './kt-1219.actions';
import { Kt1219Effects } from './kt-1219.effects';

describe('Kt1219Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1219Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1219Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1219Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1219Actions.init() });

      const expected = hot('-a-|', { a: Kt1219Actions.loadKt1219Success({ kt1219: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
