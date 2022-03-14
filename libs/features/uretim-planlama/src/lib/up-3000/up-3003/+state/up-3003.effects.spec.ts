import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3003Actions from './up-3003.actions';
import { Up3003Effects } from './up-3003.effects';

describe('Up3003Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3003Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3003Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3003Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3003Actions.init() });

      const expected = hot('-a-|', {
        a: Up3003Actions.loadUp3003Success({ up3003: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
