import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1225Actions from './kt-1225.actions';
import { Kt1225Effects } from './kt-1225.effects';

describe('Kt1225Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1225Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1225Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1225Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1225Actions.init() });

      const expected = hot('-a-|', { a: Kt1225Actions.loadKt1225Success({ kt1225: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
