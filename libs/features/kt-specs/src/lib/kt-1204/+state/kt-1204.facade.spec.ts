import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1204Actions from './kt-1204.actions';
import { Kt1204Effects } from './kt-1204.effects';
import { Kt1204Facade } from './kt-1204.facade';
import { Kt1204Entity } from './kt-1204.models';
import { KT_1204_FEATURE_KEY, State, initialState, reducer } from './kt-1204.reducer';
import * as Kt1204Selectors from './kt-1204.selectors';

interface TestSchema {
  kt1204: State;
}

describe('Kt1204Facade', () => {
  let facade: Kt1204Facade;
  let store: Store<TestSchema>;
  const createKt1204Entity = (id: string, name = ''): Kt1204Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1204_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1204Effects])],
        providers: [Kt1204Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1204Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1204$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1204$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1204Success` to manually update list
     */
    it('allKt1204$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1204$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1204Actions.loadKt1204Success({
          kt1204: [createKt1204Entity('AAA'), createKt1204Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1204$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
