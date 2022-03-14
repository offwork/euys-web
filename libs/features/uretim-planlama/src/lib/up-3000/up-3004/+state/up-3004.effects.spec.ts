import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3004Actions from './up-3004.actions';
import { Up3004Effects } from './up-3004.effects';

describe('Up3004Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3004Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3004Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3004Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3004Actions.init() });

      const expected = hot('-a-|', {
        a: Up3004Actions.loadUp3004Success({ up3004: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
