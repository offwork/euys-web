import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1257Actions from './kt-1257.actions';
import { Kt1257Effects } from './kt-1257.effects';
import { Kt1257Facade } from './kt-1257.facade';
import { Kt1257Entity } from './kt-1257.models';
import { KT_1257_FEATURE_KEY, State, initialState, reducer } from './kt-1257.reducer';
import * as Kt1257Selectors from './kt-1257.selectors';

interface TestSchema {
  kt1257: State;
}

describe('Kt1257Facade', () => {
  let facade: Kt1257Facade;
  let store: Store<TestSchema>;
  const createKt1257Entity = (id: string, name = ''): Kt1257Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1257_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1257Effects])],
        providers: [Kt1257Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1257Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1257$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1257$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1257Success` to manually update list
     */
    it('allKt1257$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1257$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1257Actions.loadKt1257Success({
          kt1257: [createKt1257Entity('AAA'), createKt1257Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1257$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
