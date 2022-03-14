import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1314Actions from './kt-1314.actions';
import { Kt1314Effects } from './kt-1314.effects';
import { Kt1314Facade } from './kt-1314.facade';
import { Kt1314Entity } from './kt-1314.models';
import {
  KT_1314_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1314.reducer';
import * as Kt1314Selectors from './kt-1314.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1314Facade', () => {
  let facade: Kt1314Facade;
  let store: Store<TestSchema>;
  const createKt1314Entity = (id: string, name = ''): Kt1314Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1314_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1314Effects]),
        ],
        providers: [Kt1314Facade],
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
      facade = TestBed.inject(Kt1314Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1314$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1314$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1314Success` to manually update list
     */
    it('allKt1314$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1314$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1314Actions.loadKt1314Success({
          kt1340: [createKt1314Entity('AAA'), createKt1314Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1314$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
