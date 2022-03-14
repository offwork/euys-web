import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1320Actions from './kt-1320.actions';
import { Kt1320Effects } from './kt-1320.effects';
import { Kt1320Facade } from './kt-1320.facade';
import { Kt1320Entity } from './kt-1320.models';
import {
  KT_1320_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1320.reducer';
import * as Kt1320Selectors from './kt-1320.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1320Facade', () => {
  let facade: Kt1320Facade;
  let store: Store<TestSchema>;
  const createKt1320Entity = (id: string, name = ''): Kt1320Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1320_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1320Effects]),
        ],
        providers: [Kt1320Facade],
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
      facade = TestBed.inject(Kt1320Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1320$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1320$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1320Success` to manually update list
     */
    it('allKt1320$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1320$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1320Actions.loadKt1320Success({
          kt1340: [createKt1320Entity('AAA'), createKt1320Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1320$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
