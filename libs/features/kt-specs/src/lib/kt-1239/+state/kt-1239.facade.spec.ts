import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1239Actions from './kt-1239.actions';
import { Kt1239Effects } from './kt-1239.effects';
import { Kt1239Facade } from './kt-1239.facade';
import { Kt1239Entity } from './kt-1239.models';
import { KT_1239_FEATURE_KEY, State, initialState, reducer } from './kt-1239.reducer';
import * as Kt1239Selectors from './kt-1239.selectors';

interface TestSchema {
  kt1239: State;
}

describe('Kt1239Facade', () => {
  let facade: Kt1239Facade;
  let store: Store<TestSchema>;
  const createKt1239Entity = (id: string, name = ''): Kt1239Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1239_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1239Effects])],
        providers: [Kt1239Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1239Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1239$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1239$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1239Success` to manually update list
     */
    it('allKt1239$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1239$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1239Actions.loadKt1239Success({
          kt1239: [createKt1239Entity('AAA'), createKt1239Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1239$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
