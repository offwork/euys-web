import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1208Actions from './kt-1208.actions';
import { Kt1208Effects } from './kt-1208.effects';
import { Kt1208Facade } from './kt-1208.facade';
import { Kt1208Entity } from './kt-1208.models';
import { KT_1208_FEATURE_KEY, State, initialState, reducer } from './kt-1208.reducer';
import * as Kt1208Selectors from './kt-1208.selectors';

interface TestSchema {
  kt1208: State;
}

describe('Kt1208Facade', () => {
  let facade: Kt1208Facade;
  let store: Store<TestSchema>;
  const createKt1208Entity = (id: string, name = ''): Kt1208Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1208_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1208Effects])],
        providers: [Kt1208Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1208Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1208$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1208$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1208Success` to manually update list
     */
    it('allKt1208$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1208$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1208Actions.loadKt1208Success({
          kt1208: [createKt1208Entity('AAA'), createKt1208Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1208$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
