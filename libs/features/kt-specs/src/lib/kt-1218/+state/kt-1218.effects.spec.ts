import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1218Actions from './kt-1218.actions';
import { Kt1218Effects } from './kt-1218.effects';

describe('Kt1218Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1218Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1218Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1218Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1218Actions.init() });

      const expected = hot('-a-|', { a: Kt1218Actions.loadKt1218Success({ cglHavaSogutma: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
