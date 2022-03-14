import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1213Actions from './kt-1213.actions';
import { Kt1213Effects } from './kt-1213.effects';

describe('Kt1213Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1213Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1213Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1213Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1213Actions.init() });

      const expected = hot('-a-|', { a: Kt1213Actions.loadKt1213Success({ kt1213: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
