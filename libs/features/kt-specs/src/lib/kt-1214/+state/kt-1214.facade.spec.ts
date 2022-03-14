import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1214Actions from './kt-1214.actions';
import { Kt1214Effects } from './kt-1214.effects';
import { Kt1214Facade } from './kt-1214.facade';
import { Kt1214Entity } from './kt-1214.models';
import { KT_1214_FEATURE_KEY, State, initialState, reducer } from './kt-1214.reducer';
import * as Kt1214Selectors from './kt-1214.selectors';

interface TestSchema {
  kt1214: State;
}

describe('Kt1214Facade', () => {
  let facade: Kt1214Facade;
  let store: Store<TestSchema>;
  const createKt1214Entity = (id: string, name = ''): Kt1214Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1214_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1214Effects])],
        providers: [Kt1214Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1214Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1214$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1214$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1214Success` to manually update list
     */
    it('allKt1214$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1214$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1214Actions.loadKt1214Success({
          kt1214: [createKt1214Entity('AAA'), createKt1214Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1214$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
