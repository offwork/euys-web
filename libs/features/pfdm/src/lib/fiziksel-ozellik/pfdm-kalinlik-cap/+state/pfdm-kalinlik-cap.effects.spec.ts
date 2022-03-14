import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';
import { PfdmKalinlikCapEffects } from './pfdm-kalinlik-cap.effects';

describe('PfdmKalinlikCapEffects', () => {
  let actions: Observable<Action>;
  let effects: PfdmKalinlikCapEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PfdmKalinlikCapEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PfdmKalinlikCapEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PfdmKalinlikCapActions.init() });

      const expected = hot('-a-|', {
        a: PfdmKalinlikCapActions.loadPfdmKalinlikCapSuccess({
          pfdmKalinlikCap: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
