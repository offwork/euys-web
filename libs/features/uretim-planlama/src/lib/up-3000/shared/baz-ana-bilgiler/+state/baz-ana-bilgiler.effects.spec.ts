import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as BazAnaBilgilerActions from './baz-ana-bilgiler.actions';
import { BazAnaBilgilerEffects } from './baz-ana-bilgiler.effects';

describe('BazAnaBilgilerEffects', () => {
  let actions: Observable<Action>;
  let effects: BazAnaBilgilerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [BazAnaBilgilerEffects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(BazAnaBilgilerEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BazAnaBilgilerActions.init() });

      const expected = hot('-a-|', { a: BazAnaBilgilerActions.loadBazAnaBilgilerSuccess({ bazAnaBilgiler: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
