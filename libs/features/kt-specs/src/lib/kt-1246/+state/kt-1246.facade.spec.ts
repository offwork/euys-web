import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1246Actions from './kt-1246.actions';
import { Kt1246Effects } from './kt-1246.effects';
import { Kt1246Facade } from './kt-1246.facade';
import { Kt1246Entity } from './kt-1246.models';
import { KT_1246_FEATURE_KEY, State, initialState, reducer } from './kt-1246.reducer';
import * as Kt1246Selectors from './kt-1246.selectors';

interface TestSchema {
  kt1246: State;
}

describe('Kt1246Facade', () => {
  let facade: Kt1246Facade;
  let store: Store<TestSchema>;
  const createKt1246Entity = (id: string, name = ''): Kt1246Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1246_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1246Effects])],
        providers: [Kt1246Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1246Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1246$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1246$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1246Success` to manually update list
     */
    it('allKt1246$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1246$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1246Actions.loadKt1246Success({
          kt1246: [createKt1246Entity('AAA'), createKt1246Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1246$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
