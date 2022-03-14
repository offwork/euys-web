import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Pfdm3101Actions from './pfdm-3101.actions';
import { Pfdm3101Effects } from './pfdm-3101.effects';
import { Pfdm3101Facade } from './pfdm-3101.facade';
import { Pfdm3101Entity } from './pfdm-3101.models';
import {
  PFDM_3101_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './pfdm-3101.reducer';
import * as Pfdm3101Selectors from './pfdm-3101.selectors';

interface TestSchema {
  pfdm3101: State;
}

describe('Pfdm3101Facade', () => {
  let facade: Pfdm3101Facade;
  let store: Store<TestSchema>;
  const createPfdm3101Entity = (id: string, name = ''): Pfdm3101Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PFDM_3101_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Pfdm3101Effects]),
        ],
        providers: [Pfdm3101Facade],
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
      facade = TestBed.inject(Pfdm3101Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPfdm3101$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPfdm3101$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPfdm3101Success` to manually update list
     */
    it('allPfdm3101$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPfdm3101$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Pfdm3101Actions.loadPfdm3101Success({
          pfdm3101: [createPfdm3101Entity('AAA'), createPfdm3101Entity('BBB')],
        })
      );

      list = await readFirst(facade.allPfdm3101$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
