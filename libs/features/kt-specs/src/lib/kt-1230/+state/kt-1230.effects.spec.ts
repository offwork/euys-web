import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1230Actions from './kt-1230.actions';
import { Kt1230Effects } from './kt-1230.effects';

describe('Kt1230Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1230Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1230Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1230Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1230Actions.init() });

      const expected = hot('-a-|', { a: Kt1230Actions.loadKt1230Success({ kt1230: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
