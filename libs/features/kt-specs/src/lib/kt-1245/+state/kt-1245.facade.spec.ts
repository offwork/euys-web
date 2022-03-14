import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1245Actions from './kt-1245.actions';
import { Kt1245Effects } from './kt-1245.effects';
import { Kt1245Facade } from './kt-1245.facade';
import { Kt1245Entity } from './kt-1245.models';
import { KT_1245_FEATURE_KEY, State, initialState, reducer } from './kt-1245.reducer';
import * as Kt1245Selectors from './kt-1245.selectors';

interface TestSchema {
  kt1245: State;
}

describe('Kt1245Facade', () => {
  let facade: Kt1245Facade;
  let store: Store<TestSchema>;
  const createKt1245Entity = (id: string, name = ''): Kt1245Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1245_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1245Effects])],
        providers: [Kt1245Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1245Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1245$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1245$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1245Success` to manually update list
     */
    it('allKt1245$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1245$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1245Actions.loadKt1245Success({
          kt1245: [createKt1245Entity('AAA'), createKt1245Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1245$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
