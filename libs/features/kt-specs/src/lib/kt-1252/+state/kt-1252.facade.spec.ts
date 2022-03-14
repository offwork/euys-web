import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1252Actions from './kt-1252.actions';
import { Kt1252Effects } from './kt-1252.effects';
import { Kt1252Facade } from './kt-1252.facade';
import { Kt1252Entity } from './kt-1252.models';
import { KT_1252_FEATURE_KEY, State, initialState, reducer } from './kt-1252.reducer';
import * as Kt1252Selectors from './kt-1252.selectors';

interface TestSchema {
  kt1252: State;
}

describe('Kt1252Facade', () => {
  let facade: Kt1252Facade;
  let store: Store<TestSchema>;
  const createKt1252Entity = (id: string, name = ''): Kt1252Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1252_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1252Effects])],
        providers: [Kt1252Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1252Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1252$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1252$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1252Success` to manually update list
     */
    it('allKt1252$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1252$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1252Actions.loadKt1252Success({
          kt1252: [createKt1252Entity('AAA'), createKt1252Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1252$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
