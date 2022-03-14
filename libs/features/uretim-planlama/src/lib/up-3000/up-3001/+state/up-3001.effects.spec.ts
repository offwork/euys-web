import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3001Actions from './up-3001.actions';
import { Up3001Effects } from './up-3001.effects';

describe('Up3001Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3001Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Up3001Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Up3001Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3001Actions.init() });

      const expected = hot('-a-|', {
        a: Up3001Actions.loadUp3001Success({ Up3001: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
