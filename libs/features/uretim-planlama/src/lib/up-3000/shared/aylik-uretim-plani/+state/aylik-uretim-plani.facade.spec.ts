import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AylikUretimPlaniActions from './aylik-uretim-plani.actions';
import { AylikUretimPlaniEffects } from './aylik-uretim-plani.effects';
import { AylikUretimPlaniFacade } from './aylik-uretim-plani.facade';
import { AylikUretimPlaniEntity } from './aylik-uretim-plani.models';
import {
  AYLIK_URETIM_PLANI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './aylik-uretim-plani.reducer';
import * as AylikUretimPlaniSelectors from './aylik-uretim-plani.selectors';

interface TestSchema {
  aylikUretimPlani: State;
}

describe('AylikUretimPlaniFacade', () => {
  let facade: AylikUretimPlaniFacade;
  let store: Store<TestSchema>;
  const createAylikUretimPlaniEntity = (
    id: string,
    name = ''
  ): AylikUretimPlaniEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(AYLIK_URETIM_PLANI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AylikUretimPlaniEffects]),
        ],
        providers: [AylikUretimPlaniFacade],
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
      facade = TestBed.inject(AylikUretimPlaniFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAylikUretimPlani$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAylikUretimPlani$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAylikUretimPlaniSuccess` to manually update list
     */
    it('allAylikUretimPlani$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAylikUretimPlani$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AylikUretimPlaniActions.loadAylikUretimPlaniSuccess({
          aylikUretimPlani: [
            createAylikUretimPlaniEntity('AAA'),
            createAylikUretimPlaniEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allAylikUretimPlani$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
