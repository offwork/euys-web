import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1243Actions from './kt-1243.actions';
import { Kt1243Effects } from './kt-1243.effects';
import { Kt1243Facade } from './kt-1243.facade';
import { Kt1243Entity } from './kt-1243.models';
import { KT_1243_FEATURE_KEY, State, initialState, reducer } from './kt-1243.reducer';
import * as Kt1243Selectors from './kt-1243.selectors';

interface TestSchema {
  kt1243: State;
}

describe('Kt1243Facade', () => {
  let facade: Kt1243Facade;
  let store: Store<TestSchema>;
  const createKt1243Entity = (id: string, name = ''): Kt1243Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1243_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1243Effects])],
        providers: [Kt1243Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1243Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1243$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1243$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1243Success` to manually update list
     */
    it('allKt1243$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1243$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1243Actions.loadKt1243Success({
          kt1243: [createKt1243Entity('AAA'), createKt1243Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1243$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
