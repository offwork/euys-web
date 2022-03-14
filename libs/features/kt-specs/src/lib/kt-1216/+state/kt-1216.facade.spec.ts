import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1216Actions from './kt-1216.actions';
import { Kt1216Effects } from './kt-1216.effects';
import { Kt1216Facade } from './kt-1216.facade';
import { Kt1216Entity } from './kt-1216.models';
import { KT_1216_FEATURE_KEY, State, initialState, reducer } from './kt-1216.reducer';
import * as Kt1216Selectors from './kt-1216.selectors';

interface TestSchema {
  kt1216: State;
}

describe('Kt1216Facade', () => {
  let facade: Kt1216Facade;
  let store: Store<TestSchema>;
  const createKt1216Entity = (id: string, name = ''): Kt1216Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1216_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1216Effects])],
        providers: [Kt1216Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1216Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1216$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1216$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1216Success` to manually update list
     */
    it('allKt1216$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1216$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1216Actions.loadKt1216Success({
          kt1216: [createKt1216Entity('AAA'), createKt1216Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1216$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
