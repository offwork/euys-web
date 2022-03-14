import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Up3016Actions from './up-3016.actions';
import { Up3016Effects } from './up-3016.effects';

describe('Up3016Effects', () => {
  let actions: Observable<Action>;
  let effects: Up3016Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Up3016Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Up3016Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Up3016Actions.init() });

      const expected = hot('-a-|', {
        a: Up3016Actions.loadUp3016Success({ up3016: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
