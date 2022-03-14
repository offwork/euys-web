import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1332Actions from './kt-1332.actions';
import { Kt1332Effects } from './kt-1332.effects';

describe('Kt1332Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1332Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1332Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1332Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1332Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1332Actions.loadKt1332Success({ kt1332: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
