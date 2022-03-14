import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3231Actions from './up-3231.actions';
import { Up3231Effects } from './up-3231.effects';

describe('Up3231Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3231Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3231Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3231Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3231Actions.init() });

      const expected = hot('-a-|', {
        a: Up3231Actions.loadUp3231Success({ up3231: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
