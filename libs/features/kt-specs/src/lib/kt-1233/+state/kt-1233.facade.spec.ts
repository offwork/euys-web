import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1233Actions from './kt-1233.actions';
import { Kt1233Effects } from './kt-1233.effects';
import { Kt1233Facade } from './kt-1233.facade';
import { Kt1233Entity } from './kt-1233.models';
import { KT_1233_FEATURE_KEY, State, initialState, reducer } from './kt-1233.reducer';
import * as Kt1233Selectors from './kt-1233.selectors';

interface TestSchema {
  kt1233: State;
}

describe('Kt1233Facade', () => {
  let facade: Kt1233Facade;
  let store: Store<TestSchema>;
  const createKt1233Entity = (id: string, name = ''): Kt1233Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1233_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1233Effects])],
        providers: [Kt1233Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1233Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1233$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1233$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1233Success` to manually update list
     */
    it('allKt1233$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1233$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1233Actions.loadKt1233Success({
          kt1233: [createKt1233Entity('AAA'), createKt1233Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1233$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
