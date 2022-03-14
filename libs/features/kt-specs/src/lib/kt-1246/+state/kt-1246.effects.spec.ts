import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1246Actions from './kt-1246.actions';
import { Kt1246Effects } from './kt-1246.effects';

describe('Kt1246Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1246Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1246Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1246Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1246Actions.init() });

      const expected = hot('-a-|', { a: Kt1246Actions.loadKt1246Success({ kt1246: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
