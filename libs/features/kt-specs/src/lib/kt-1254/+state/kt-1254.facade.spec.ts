import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1254Actions from './kt-1254.actions';
import { Kt1254Effects } from './kt-1254.effects';
import { Kt1254Facade } from './kt-1254.facade';
import { Kt1254Entity } from './kt-1254.models';
import { KT_1254_FEATURE_KEY, State, initialState, reducer } from './kt-1254.reducer';
import * as Kt1254Selectors from './kt-1254.selectors';

interface TestSchema {
  kt1254: State;
}

describe('Kt1254Facade', () => {
  let facade: Kt1254Facade;
  let store: Store<TestSchema>;
  const createKt1254Entity = (id: string, name = ''): Kt1254Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1254_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1254Effects])],
        providers: [Kt1254Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1254Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1254$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1254$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1254Success` to manually update list
     */
    it('allKt1254$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1254$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1254Actions.loadKt1254Success({
          kt1254: [createKt1254Entity('AAA'), createKt1254Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1254$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
