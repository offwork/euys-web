import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1216Actions from './kt-1216.actions';
import { Kt1216Effects } from './kt-1216.effects';

describe('Kt1216Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1216Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1216Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1216Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1216Actions.init() });

      const expected = hot('-a-|', { a: Kt1216Actions.loadKt1216Success({ kt1216: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
