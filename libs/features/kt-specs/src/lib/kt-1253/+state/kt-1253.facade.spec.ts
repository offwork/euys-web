import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1253Actions from './kt-1253.actions';
import { Kt1253Effects } from './kt-1253.effects';
import { Kt1253Facade } from './kt-1253.facade';
import { Kt1253Entity } from './kt-1253.models';
import { KT_1253_FEATURE_KEY, State, initialState, reducer } from './kt-1253.reducer';
import * as Kt1253Selectors from './kt-1253.selectors';

interface TestSchema {
  kt1253: State;
}

describe('Kt1253Facade', () => {
  let facade: Kt1253Facade;
  let store: Store<TestSchema>;
  const createKt1253Entity = (id: string, name = ''): Kt1253Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1253_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1253Effects])],
        providers: [Kt1253Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1253Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1253$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1253$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1253Success` to manually update list
     */
    it('allKt1253$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1253$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1253Actions.loadKt1253Success({
          kt1253: [createKt1253Entity('AAA'), createKt1253Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1253$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
