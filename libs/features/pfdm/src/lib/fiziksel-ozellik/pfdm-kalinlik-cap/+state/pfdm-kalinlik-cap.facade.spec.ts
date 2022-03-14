import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as PfdmKalinlikCapActions from './pfdm-kalinlik-cap.actions';
import { PfdmKalinlikCapEffects } from './pfdm-kalinlik-cap.effects';
import { PfdmKalinlikCapFacade } from './pfdm-kalinlik-cap.facade';
import { PfdmKalinlikCapEntity } from './pfdm-kalinlik-cap.models';
import {
  PFDM_KALINLIK_CAP_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './pfdm-kalinlik-cap.reducer';
import * as PfdmKalinlikCapSelectors from './pfdm-kalinlik-cap.selectors';

interface TestSchema {
  pfdmKalinlikCap: State;
}

describe('PfdmKalinlikCapFacade', () => {
  let facade: PfdmKalinlikCapFacade;
  let store: Store<TestSchema>;
  const createPfdmKalinlikCapEntity = (
    id: string,
    name = ''
  ): PfdmKalinlikCapEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PFDM_KALINLIK_CAP_FEATURE_KEY, reducer),
          EffectsModule.forFeature([PfdmKalinlikCapEffects]),
        ],
        providers: [PfdmKalinlikCapFacade],
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
      facade = TestBed.inject(PfdmKalinlikCapFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPfdmKalinlikCap$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPfdmKalinlikCap$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPfdmKalinlikCapSuccess` to manually update list
     */
    it('allPfdmKalinlikCap$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPfdmKalinlikCap$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        PfdmKalinlikCapActions.loadPfdmKalinlikCapSuccess({
          pfdmKalinlikCap: [
            createPfdmKalinlikCapEntity('AAA'),
            createPfdmKalinlikCapEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allPfdmKalinlikCap$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
