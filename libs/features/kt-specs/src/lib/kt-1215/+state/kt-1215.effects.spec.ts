import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1215Actions from './kt-1215.actions';
import { Kt1215Effects } from './kt-1215.effects';

describe('Kt1215Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1215Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1215Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1215Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1215Actions.init() });

      const expected = hot('-a-|', { a: Kt1215Actions.loadKt1215Success({ kt1215: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
