import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1219Actions from './kt-1219.actions';
import { Kt1219Effects } from './kt-1219.effects';
import { Kt1219Facade } from './kt-1219.facade';
import { Kt1219Entity } from './kt-1219.models';
import { KT_1219_FEATURE_KEY, State, initialState, reducer } from './kt-1219.reducer';
import * as Kt1219Selectors from './kt-1219.selectors';

interface TestSchema {
  kt1201: State;
}

describe('Kt1219Facade', () => {
  let facade: Kt1219Facade;
  let store: Store<TestSchema>;
  const createKt1219Entity = (id: string, name = ''): Kt1219Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1219_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1219Effects])],
        providers: [Kt1219Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1219Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1219$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1219$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1219Success` to manually update list
     */
    it('allKt1219$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1219$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1219Actions.loadKt1219Success({
          kt1201: [createKt1219Entity('AAA'), createKt1219Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1219$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
