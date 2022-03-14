import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1255Actions from './kt-1255.actions';
import { Kt1255Effects } from './kt-1255.effects';
import { Kt1255Facade } from './kt-1255.facade';
import { Kt1255Entity } from './kt-1255.models';
import { KT_1255_FEATURE_KEY, State, initialState, reducer } from './kt-1255.reducer';
import * as Kt1255Selectors from './kt-1255.selectors';

interface TestSchema {
  kt1255: State;
}

describe('Kt1255Facade', () => {
  let facade: Kt1255Facade;
  let store: Store<TestSchema>;
  const createKt1255Entity = (id: string, name = ''): Kt1255Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1255_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1255Effects])],
        providers: [Kt1255Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1255Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1255$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1255$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1255Success` to manually update list
     */
    it('allKt1255$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1255$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1255Actions.loadKt1255Success({
          kt1255: [createKt1255Entity('AAA'), createKt1255Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1255$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
