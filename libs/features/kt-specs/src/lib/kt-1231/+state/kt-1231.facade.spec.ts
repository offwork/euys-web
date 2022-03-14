import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1231Actions from './kt-1231.actions';
import { Kt1231Effects } from './kt-1231.effects';
import { Kt1231Facade } from './kt-1231.facade';
import { Kt1231Entity } from './kt-1231.models';
import { KT_1231_FEATURE_KEY, State, initialState, reducer } from './kt-1231.reducer';
import * as Kt1231Selectors from './kt-1231.selectors';

interface TestSchema {
  kt1231: State;
}

describe('Kt1231Facade', () => {
  let facade: Kt1231Facade;
  let store: Store<TestSchema>;
  const createKt1231Entity = (id: string, name = ''): Kt1231Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1231_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1231Effects])],
        providers: [Kt1231Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1231Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1231$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1231$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1231Success` to manually update list
     */
    it('allKt1231$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1231$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1231Actions.loadKt1231Success({
          kt1231: [createKt1231Entity('AAA'), createKt1231Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1231$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
