import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1321Actions from './kt-1321.actions';
import { Kt1321Effects } from './kt-1321.effects';
import { Kt1321Facade } from './kt-1321.facade';
import { Kt1321Entity } from './kt-1321.models';
import {
  KT_1321_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1321.reducer';
import * as Kt1321Selectors from './kt-1321.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1321Facade', () => {
  let facade: Kt1321Facade;
  let store: Store<TestSchema>;
  const createKt1321Entity = (id: string, name = ''): Kt1321Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1321_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1321Effects]),
        ],
        providers: [Kt1321Facade],
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
      facade = TestBed.inject(Kt1321Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1321$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1321$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1321Success` to manually update list
     */
    it('allKt1321$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1321$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1321Actions.loadKt1321Success({
          kt1340: [createKt1321Entity('AAA'), createKt1321Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1321$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
