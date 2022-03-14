import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1244Actions from './kt-1244.actions';
import { Kt1244Effects } from './kt-1244.effects';
import { Kt1244Facade } from './kt-1244.facade';
import { Kt1244Entity } from './kt-1244.models';
import { KT_1244_FEATURE_KEY, State, initialState, reducer } from './kt-1244.reducer';
import * as Kt1244Selectors from './kt-1244.selectors';

interface TestSchema {
  kt1244: State;
}

describe('Kt1244Facade', () => {
  let facade: Kt1244Facade;
  let store: Store<TestSchema>;
  const createKt1244Entity = (id: string, name = ''): Kt1244Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1244_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1244Effects])],
        providers: [Kt1244Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1244Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1244$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1244$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1244Success` to manually update list
     */
    it('allKt1244$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1244$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1244Actions.loadKt1244Success({
          kt1244: [createKt1244Entity('AAA'), createKt1244Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1244$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
