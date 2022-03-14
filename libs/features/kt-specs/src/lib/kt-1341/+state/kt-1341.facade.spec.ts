import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1341Actions from './kt-1341.actions';
import { Kt1341Effects } from './kt-1341.effects';
import { Kt1341Facade } from './kt-1341.facade';
import { Kt1341Entity } from './kt-1341.models';
import {
  KT_1340_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1341.reducer';
import * as Kt1341Selectors from './kt-1341.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1341Facade', () => {
  let facade: Kt1341Facade;
  let store: Store<TestSchema>;
  const createKt1341Entity = (id: string, name = ''): Kt1341Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1340_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1341Effects]),
        ],
        providers: [Kt1341Facade],
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
      facade = TestBed.inject(Kt1341Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1341$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1341$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1341Success` to manually update list
     */
    it('allKt1341$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1341$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1341Actions.loadKt1341Success({
          kt1340: [createKt1341Entity('AAA'), createKt1341Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1341$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
