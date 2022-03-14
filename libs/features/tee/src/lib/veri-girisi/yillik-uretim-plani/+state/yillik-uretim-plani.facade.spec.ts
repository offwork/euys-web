import {NgModule} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {EffectsModule} from '@ngrx/effects';
import {Store, StoreModule} from '@ngrx/store';

import {NxModule} from '@nrwl/angular';

import {YillikUretimPlaniEffects} from './yillik-uretim-plani.effects';
import {YillikUretimPlaniFacade} from './yillik-uretim-plani.facade';
import {reducer, State, YILLIK_URETIM_PLANI_FEATURE_KEY} from './yillik-uretim-plani.reducer';

interface TestSchema {
  yillikUretimPlani: State;
}

describe('YillikUretimPlaniFacade', () => {
  let facade: YillikUretimPlaniFacade;
  let store: Store<TestSchema>;

  beforeEach(() => { /* Do nothing */ });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(YILLIK_URETIM_PLANI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([YillikUretimPlaniEffects]),
        ],
        providers: [YillikUretimPlaniFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(YillikUretimPlaniFacade);
    });


  });
});
