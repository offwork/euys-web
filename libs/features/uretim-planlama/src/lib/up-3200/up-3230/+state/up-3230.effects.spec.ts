import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3230Actions from './up-3230.actions';
import { Up3230Effects } from './up-3230.effects';

describe('Up3230Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3230Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3230Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3230Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3230Actions.init() });

      const expected = hot('-a-|', {
        a: Up3230Actions.loadUp3230Success({ up3230: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
