import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3010Actions from './up-3010.actions';
import { Up3010Effects } from './up-3010.effects';

describe('Up3010Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3010Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3010Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3010Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3010Actions.init() });

      const expected = hot('-a-|', {
        a: Up3010Actions.loadUp3010Success({ up3010: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
