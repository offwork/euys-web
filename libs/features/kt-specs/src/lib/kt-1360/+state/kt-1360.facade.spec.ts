import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1360Actions from './kt-1360.actions';
import { Kt1360Effects } from './kt-1360.effects';
import { Kt1360Facade } from './kt-1360.facade';
import { Kt1360Entity } from './kt-1360.models';
import {
  KT_1360_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1360.reducer';
import * as Kt1360Selectors from './kt-1360.selectors';

interface TestSchema {
  kt1360: State;
}

describe('Kt1360Facade', () => {
  let facade: Kt1360Facade;
  let store: Store<TestSchema>;
  const createKt1360Entity = (id: string, name = ''): Kt1360Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1360_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1360Effects]),
        ],
        providers: [Kt1360Facade],
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
      facade = TestBed.inject(Kt1360Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1360$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1360$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1360Success` to manually update list
     */
    it('allKt1360$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1360$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1360Actions.loadKt1360Success({
          kt1360: [createKt1360Entity('AAA'), createKt1360Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1360$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
