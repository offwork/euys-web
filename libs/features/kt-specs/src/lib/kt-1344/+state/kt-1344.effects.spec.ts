import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1344Actions from './kt-1344.actions';
import { Kt1344Effects } from './kt-1344.effects';

describe('Kt1344Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1344Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1344Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1344Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1344Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1344Actions.loadKt1344Success({ kt1344: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
