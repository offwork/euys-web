import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1234Actions from './kt-1234.actions';
import { Kt1234Effects } from './kt-1234.effects';
import { Kt1234Facade } from './kt-1234.facade';
import { Kt1234Entity } from './kt-1234.models';
import { KT_1234_FEATURE_KEY, State, initialState, reducer } from './kt-1234.reducer';
import * as Kt1234Selectors from './kt-1234.selectors';

interface TestSchema {
  kt1234: State;
}

describe('Kt1234Facade', () => {
  let facade: Kt1234Facade;
  let store: Store<TestSchema>;
  const createKt1234Entity = (id: string, name = ''): Kt1234Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1234_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1234Effects])],
        providers: [Kt1234Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1234Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1234$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1234$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1234Success` to manually update list
     */
    it('allKt1234$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1234$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1234Actions.loadKt1234Success({
          kt1234: [createKt1234Entity('AAA'), createKt1234Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1234$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
