import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1225Actions from './kt-1225.actions';
import { Kt1225Effects } from './kt-1225.effects';
import { Kt1225Facade } from './kt-1225.facade';
import { Kt1225Entity } from './kt-1225.models';
import { KT_1225_FEATURE_KEY, State, initialState, reducer } from './kt-1225.reducer';
import * as Kt1225Selectors from './kt-1225.selectors';

interface TestSchema {
  kt1225: State;
}

describe('Kt1225Facade', () => {
  let facade: Kt1225Facade;
  let store: Store<TestSchema>;
  const createKt1225Entity = (id: string, name = ''): Kt1225Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1225_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1225Effects])],
        providers: [Kt1225Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1225Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1225$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1225$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1225Success` to manually update list
     */
    it('allKt1225$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1225$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1225Actions.loadKt1225Success({
          kt1225: [createKt1225Entity('AAA'), createKt1225Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1225$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
