import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3017Actions from './up-3017.actions';
import { Up3017Effects } from './up-3017.effects';

describe('Up3017Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3017Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3017Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3017Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3017Actions.init() });

      const expected = hot('-a-|', {
        a: Up3017Actions.loadUp3017Success({ up3017: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
