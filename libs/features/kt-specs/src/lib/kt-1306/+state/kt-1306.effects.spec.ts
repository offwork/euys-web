import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1306Actions from './kt-1306.actions';
import { Kt1306Effects } from './kt-1306.effects';

describe('Kt1306Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1306Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1306Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1306Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1306Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1306Actions.loadKt1306Success({ kt1306: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
