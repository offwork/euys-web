import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1235Actions from './kt-1235.actions';
import { Kt1235Effects } from './kt-1235.effects';
import { Kt1235Facade } from './kt-1235.facade';
import { Kt1235Entity } from './kt-1235.models';
import { KT_1235_FEATURE_KEY, State, initialState, reducer } from './kt-1235.reducer';
import * as Kt1235Selectors from './kt-1235.selectors';

interface TestSchema {
  kt1235: State;
}

describe('Kt1235Facade', () => {
  let facade: Kt1235Facade;
  let store: Store<TestSchema>;
  const createKt1235Entity = (id: string, name = ''): Kt1235Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1235_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1235Effects])],
        providers: [Kt1235Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1235Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1235$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1235$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1235Success` to manually update list
     */
    it('allKt1235$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1235$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1235Actions.loadKt1235Success({
          kt1235: [createKt1235Entity('AAA'), createKt1235Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1235$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
