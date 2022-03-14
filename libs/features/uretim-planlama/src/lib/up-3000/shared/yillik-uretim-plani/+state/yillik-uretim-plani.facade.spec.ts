import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as YillikUretimPlaniActions from './yillik-uretim-plani.actions';
import { YillikUretimPlaniEffects } from './yillik-uretim-plani.effects';
import { YillikUretimPlaniFacade } from './yillik-uretim-plani.facade';
import { YillikUretimPlaniEntity } from './yillik-uretim-plani.models';
import {
  YILLIK_URETIM_PLANI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './yillik-uretim-plani.reducer';
import * as YillikUretimPlaniSelectors from './yillik-uretim-plani.selectors';

interface TestSchema {
  yillikUretimPlani: State;
}

describe('YillikUretimPlaniFacade', () => {
  let facade: YillikUretimPlaniFacade;
  let store: Store<TestSchema>;
  const createYillikUretimPlaniEntity = (
    id: string,
    name = ''
  ): YillikUretimPlaniEntity => ({
    id,
    name: name || `name-${id}`,
  });

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
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(YillikUretimPlaniFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allYillikUretimPlani$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allYillikUretimPlani$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadYillikUretimPlaniSuccess` to manually update list
     */
    it('allYillikUretimPlani$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allYillikUretimPlani$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        YillikUretimPlaniActions.loadYillikUretimPlaniSuccess({
          yillikUretimPlani: [
            createYillikUretimPlaniEntity('AAA'),
            createYillikUretimPlaniEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allYillikUretimPlani$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
