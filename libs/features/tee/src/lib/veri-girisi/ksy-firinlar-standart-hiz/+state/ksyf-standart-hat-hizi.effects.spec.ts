import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { KsyfStandartHatHiziEffects } from './ksyf-standart-hat-hizi.effects';
import * as KsyfStandartHatHiziActions from './ksyf-standart-hat-hizi.actions';

describe('KsyfStandartHatHiziEffects', () => {
  let actions: Observable<any>;
  let effects: KsyfStandartHatHiziEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [KsyfStandartHatHiziEffects, DataPersistence, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(KsyfStandartHatHiziEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: KsyfStandartHatHiziActions.init() });

      const expected = hot('-a-|', {
        a: KsyfStandartHatHiziActions.loadKsyfStandartHatHiziSuccess({ ksyfStandartHatHizi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
