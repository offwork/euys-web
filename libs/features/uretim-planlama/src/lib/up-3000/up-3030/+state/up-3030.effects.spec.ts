import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3030Actions from './up-3030.actions';
import { Up3030Effects } from './up-3030.effects';

describe('Up3030Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3030Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3030Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3030Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3030Actions.init() });

      const expected = hot('-a-|', {
        a: Up3030Actions.loadUp3030Success({ up3030: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
