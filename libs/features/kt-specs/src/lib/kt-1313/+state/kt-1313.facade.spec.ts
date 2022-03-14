import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1313Actions from './kt-1313.actions';
import { Kt1313Effects } from './kt-1313.effects';
import { Kt1313Facade } from './kt-1313.facade';
import { Kt1313Entity } from './kt-1313.models';
import {
  KT_1303_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1313.reducer';
import * as Kt1313Selectors from './kt-1313.selectors';

interface TestSchema {
  kt1313: State;
}

describe('Kt1313Facade', () => {
  let facade: Kt1313Facade;
  let store: Store<TestSchema>;
  const createKt1313Entity = (id: string, name = ''): Kt1313Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1303_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1313Effects]),
        ],
        providers: [Kt1313Facade],
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
      facade = TestBed.inject(Kt1313Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1313$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1313$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1313Success` to manually update list
     */
    it('allKt1313$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1313$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1313Actions.loadKt1313Success({
          kt1313: [createKt1313Entity('AAA'), createKt1313Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1313$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
