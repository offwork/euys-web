import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1362Actions from './kt-1362.actions';
import { Kt1362Effects } from './kt-1362.effects';
import { Kt1362Facade } from './kt-1362.facade';
import { Kt1362Entity } from './kt-1362.models';
import {
  KT_1362_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1362.reducer';
import * as Kt1362Selectors from './kt-1362.selectors';

interface TestSchema {
  kt1362: State;
}

describe('Kt1362Facade', () => {
  let facade: Kt1362Facade;
  let store: Store<TestSchema>;
  const createKt1362Entity = (id: string, name = ''): Kt1362Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1362_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1362Effects]),
        ],
        providers: [Kt1362Facade],
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
      facade = TestBed.inject(Kt1362Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1362$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1362$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1362Success` to manually update list
     */
    it('allKt1362$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1362$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1362Actions.loadKt1362Success({
          kt1362: [createKt1362Entity('AAA'), createKt1362Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1362$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
