import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1241Actions from './kt-1241.actions';
import { Kt1241Effects } from './kt-1241.effects';
import { Kt1241Facade } from './kt-1241.facade';
import { Kt1241Entity } from './kt-1241.models';
import { KT_1241_FEATURE_KEY, State, initialState, reducer } from './kt-1241.reducer';
import * as Kt1241Selectors from './kt-1241.selectors';

interface TestSchema {
  kt1241: State;
}

describe('Kt1241Facade', () => {
  let facade: Kt1241Facade;
  let store: Store<TestSchema>;
  const createKt1241Entity = (id: string, name = ''): Kt1241Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1241_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1241Effects])],
        providers: [Kt1241Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1241Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1241$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1241$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1241Success` to manually update list
     */
    it('allKt1241$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1241$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1241Actions.loadKt1241Success({
          kt1241: [createKt1241Entity('AAA'), createKt1241Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1241$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
