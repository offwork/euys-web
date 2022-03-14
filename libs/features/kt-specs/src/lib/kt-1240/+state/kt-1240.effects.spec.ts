import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1240Actions from './kt-1240.actions';
import { Kt1240Effects } from './kt-1240.effects';

describe('Kt1240Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1240Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1240Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1240Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1240Actions.init() });

      const expected = hot('-a-|', { a: Kt1240Actions.loadKt1240Success({ kt1240: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
