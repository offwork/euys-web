import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1210Actions from './kt-1210.actions';
import { Kt1210Effects } from './kt-1210.effects';

describe('Kt1210Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1210Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1210Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1210Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1210Actions.init() });

      const expected = hot('-a-|', { a: Kt1210Actions.loadKt1210Success({ kt1210: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
