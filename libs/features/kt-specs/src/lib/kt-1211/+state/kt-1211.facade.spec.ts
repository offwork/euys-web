import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1211Actions from './kt-1211.actions';
import { Kt1211Effects } from './kt-1211.effects';
import { Kt1211Facade } from './kt-1211.facade';
import { Kt1211Entity } from './kt-1211.models';
import { KT_1211_FEATURE_KEY, State, initialState, reducer } from './kt-1211.reducer';
import * as Kt1211Selectors from './kt-1211.selectors';

interface TestSchema {
  kt1211: State;
}

describe('Kt1211Facade', () => {
  let facade: Kt1211Facade;
  let store: Store<TestSchema>;
  const createKt1211Entity = (id: string, name = ''): Kt1211Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1211_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1211Effects])],
        providers: [Kt1211Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1211Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1211$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1211$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1211Success` to manually update list
     */
    it('allKt1211$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1211$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1211Actions.loadKt1211Success({
          kt1211: [createKt1211Entity('AAA'), createKt1211Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1211$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
