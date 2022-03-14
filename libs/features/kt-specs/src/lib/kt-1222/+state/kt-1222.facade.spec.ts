import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1222Actions from './kt-1222.actions';
import { Kt1222Effects } from './kt-1222.effects';
import { Kt1222Facade } from './kt-1222.facade';
import { Kt1222Entity } from './kt-1222.models';
import { KT_1222_FEATURE_KEY, State, initialState, reducer } from './kt-1222.reducer';
import * as Kt1222Selectors from './kt-1222.selectors';

interface TestSchema {
  kt1222: State;
}

describe('Kt1222Facade', () => {
  let facade: Kt1222Facade;
  let store: Store<TestSchema>;
  const createKt1222Entity = (id: string, name = ''): Kt1222Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1222_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1222Effects])],
        providers: [Kt1222Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1222Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1222$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1222$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1222Success` to manually update list
     */
    it('allKt1222$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1222$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1222Actions.loadKt1222Success({
          kt1222: [createKt1222Entity('AAA'), createKt1222Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1222$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
