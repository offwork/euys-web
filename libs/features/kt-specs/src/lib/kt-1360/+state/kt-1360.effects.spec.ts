import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1360Actions from './kt-1360.actions';
import { Kt1360Effects } from './kt-1360.effects';

describe('Kt1360Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1360Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1360Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1360Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1360Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1360Actions.loadKt1360Success({ kt1360: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
