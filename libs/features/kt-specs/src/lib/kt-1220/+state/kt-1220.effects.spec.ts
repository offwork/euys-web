import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1220Actions from './kt-1220.actions';
import { Kt1220Effects } from './kt-1220.effects';

describe('Kt1220Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1220Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1220Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1220Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1220Actions.init() });

      const expected = hot('-a-|', { a: Kt1220Actions.loadKt1220Success({ kt1220: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
