import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1248Actions from './kt-1248.actions';
import { Kt1248Effects } from './kt-1248.effects';

describe('Kt1248Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1248Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1248Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1248Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1248Actions.init() });

      const expected = hot('-a-|', { a: Kt1248Actions.loadKt1248Success({ kt1248: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
