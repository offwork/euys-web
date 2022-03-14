import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as ImalatLotActions from './imalat-lot.actions';
import { ImalatLotEffects } from './imalat-lot.effects';

describe('ImalatLotEffects', () => {
  let actions: Observable<Action>;
  let effects: ImalatLotEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ImalatLotEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ImalatLotEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ImalatLotActions.init() });

      const expected = hot('-a-|', {
        a: ImalatLotActions.loadImalatLotSuccess({ imalatLot: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
