import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1242Actions from './kt-1242.actions';
import { Kt1242Effects } from './kt-1242.effects';
import { Kt1242Facade } from './kt-1242.facade';
import { Kt1242Entity } from './kt-1242.models';
import { KT_1242_FEATURE_KEY, State, initialState, reducer } from './kt-1242.reducer';
import * as Kt1242Selectors from './kt-1242.selectors';

interface TestSchema {
  kt1242: State;
}

describe('Kt1242Facade', () => {
  let facade: Kt1242Facade;
  let store: Store<TestSchema>;
  const createKt1242Entity = (id: string, name = ''): Kt1242Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1242_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1242Effects])],
        providers: [Kt1242Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1242Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1242$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1242$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1242Success` to manually update list
     */
    it('allKt1242$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1242$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1242Actions.loadKt1242Success({
          kt1242: [createKt1242Entity('AAA'), createKt1242Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1242$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
