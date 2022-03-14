import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1212Actions from './kt-1212.actions';
import { Kt1212Effects } from './kt-1212.effects';
import { Kt1212Facade } from './kt-1212.facade';
import { Kt1212Entity } from './kt-1212.models';
import { KT_1212_FEATURE_KEY, State, initialState, reducer } from './kt-1212.reducer';
import * as Kt1212Selectors from './kt-1212.selectors';

interface TestSchema {
  kt1212: State;
}

describe('Kt1212Facade', () => {
  let facade: Kt1212Facade;
  let store: Store<TestSchema>;
  const createKt1212Entity = (id: string, name = ''): Kt1212Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1212_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1212Effects])],
        providers: [Kt1212Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1212Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1212$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1212$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1212Success` to manually update list
     */
    it('allKt1212$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1212$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1212Actions.loadKt1212Success({
          kt1212: [createKt1212Entity('AAA'), createKt1212Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1212$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
