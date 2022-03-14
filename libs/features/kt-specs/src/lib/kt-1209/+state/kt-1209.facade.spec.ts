import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1209Actions from './kt-1209.actions';
import { Kt1209Effects } from './kt-1209.effects';
import { Kt1209Facade } from './kt-1209.facade';
import { Kt1209Entity } from './kt-1209.models';
import { KT_1209_FEATURE_KEY, State, initialState, reducer } from './kt-1209.reducer';
import * as Kt1209Selectors from './kt-1209.selectors';

interface TestSchema {
  kt1209: State;
}

describe('Kt1209Facade', () => {
  let facade: Kt1209Facade;
  let store: Store<TestSchema>;
  const createKt1209Entity = (id: string, name = ''): Kt1209Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1209_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1209Effects])],
        providers: [Kt1209Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1209Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1209$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1209$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1209Success` to manually update list
     */
    it('allKt1209$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1209$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1209Actions.loadKt1209Success({
          kt1209: [createKt1209Entity('AAA'), createKt1209Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1209$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
