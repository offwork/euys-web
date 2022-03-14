import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1257Actions from './kt-1257.actions';
import { Kt1257Effects } from './kt-1257.effects';

describe('Kt1257Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1257Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1257Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1257Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1257Actions.init() });

      const expected = hot('-a-|', { a: Kt1257Actions.loadKt1257Success({ kt1257: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
