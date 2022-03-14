import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1224Actions from './kt-1224.actions';
import { Kt1224Effects } from './kt-1224.effects';
import { Kt1224Facade } from './kt-1224.facade';
import { Kt1224Entity } from './kt-1224.models';
import { KT_1224_FEATURE_KEY, State, initialState, reducer } from './kt-1224.reducer';
import * as Kt1224Selectors from './kt-1224.selectors';

interface TestSchema {
  kt1224: State;
}

describe('Kt1224Facade', () => {
  let facade: Kt1224Facade;
  let store: Store<TestSchema>;
  const createKt1224Entity = (id: string, name = ''): Kt1224Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1224_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1224Effects])],
        providers: [Kt1224Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1224Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1224$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1224$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1224Success` to manually update list
     */
    it('allKt1224$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1224$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1224Actions.loadKt1224Success({
          kt1224: [createKt1224Entity('AAA'), createKt1224Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1224$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
