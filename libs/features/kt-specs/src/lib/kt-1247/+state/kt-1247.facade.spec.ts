import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1247Actions from './kt-1247.actions';
import { Kt1247Effects } from './kt-1247.effects';
import { Kt1247Facade } from './kt-1247.facade';
import { Kt1247Entity } from './kt-1247.models';
import { KT_1247_FEATURE_KEY, State, initialState, reducer } from './kt-1247.reducer';
import * as Kt1247Selectors from './kt-1247.selectors';

interface TestSchema {
  kt1247: State;
}

describe('Kt1247Facade', () => {
  let facade: Kt1247Facade;
  let store: Store<TestSchema>;
  const createKt1247Entity = (id: string, name = ''): Kt1247Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1247_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1247Effects])],
        providers: [Kt1247Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1247Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1247$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1247$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1247Success` to manually update list
     */
    it('allKt1247$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1247$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1247Actions.loadKt1247Success({
          kt1247: [createKt1247Entity('AAA'), createKt1247Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1247$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
