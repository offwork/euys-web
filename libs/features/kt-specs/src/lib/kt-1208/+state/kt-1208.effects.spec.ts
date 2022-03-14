import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1208Actions from './kt-1208.actions';
import { Kt1208Effects } from './kt-1208.effects';

describe('Kt1208Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1208Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1208Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1208Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1208Actions.init() });

      const expected = hot('-a-|', { a: Kt1208Actions.loadKt1208Success({ kt1208: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
