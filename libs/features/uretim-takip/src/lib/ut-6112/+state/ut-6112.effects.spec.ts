import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Ut6112Actions from './ut-6112.actions';
import { Ut6112Effects } from './ut-6112.effects';

describe('Ut6112Effects', () => {
  let actions: Observable<Action>;
  let effects: Ut6112Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Ut6112Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Ut6112Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Ut6112Actions.init() });

      const expected = hot('-a-|', {
        a: Ut6112Actions.loadUt6112Success({ ut6112: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
