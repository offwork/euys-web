import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3005Actions from './up-3005.actions';
import { Up3005Effects } from './up-3005.effects';

describe('Up3005Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3005Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3005Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3005Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3005Actions.init() });

      const expected = hot('-a-|', {
        a: Up3005Actions.loadUp3005Success({ up3005: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
