import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1304Actions from './kt-1304.actions';
import { Kt1304Effects } from './kt-1304.effects';
import { Kt1304Facade } from './kt-1304.facade';
import { Kt1304Entity } from './kt-1304.models';
import {
  KT_1304_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1304.reducer';
import * as Kt1304Selectors from './kt-1304.selectors';

interface TestSchema {
  kt1304: State;
}

describe('Kt1304Facade', () => {
  let facade: Kt1304Facade;
  let store: Store<TestSchema>;
  const createKt1304Entity = (id: string, name = ''): Kt1304Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1304_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1304Effects]),
        ],
        providers: [Kt1304Facade],
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
      facade = TestBed.inject(Kt1304Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1304$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1304$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1304Success` to manually update list
     */
    it('allKt1304$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1304$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1304Actions.loadKt1304Success({
          kt1304: [createKt1304Entity('AAA'), createKt1304Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1304$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
