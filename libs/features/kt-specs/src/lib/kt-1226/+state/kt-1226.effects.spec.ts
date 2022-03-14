import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1226Actions from './kt-1226.actions';
import { Kt1226Effects } from './kt-1226.effects';

describe('Kt1226Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1226Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1226Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1226Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1226Actions.init() });

      const expected = hot('-a-|', { a: Kt1226Actions.loadKt1226Success({ kt1226: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
