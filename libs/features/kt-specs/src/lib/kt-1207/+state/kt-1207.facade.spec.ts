import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1207Actions from './kt-1207.actions';
import { Kt1207Effects } from './kt-1207.effects';
import { Kt1207Facade } from './kt-1207.facade';
import { Kt1207Entity } from './kt-1207.models';
import { KT_1207_FEATURE_KEY, State, initialState, reducer } from './kt-1207.reducer';
import * as Kt1207Selectors from './kt-1207.selectors';

interface TestSchema {
  kt1207: State;
}

describe('Kt1207Facade', () => {
  let facade: Kt1207Facade;
  let store: Store<TestSchema>;
  const createKt1207Entity = (id: string, name = ''): Kt1207Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1207_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1207Effects])],
        providers: [Kt1207Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1207Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1207$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1207$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1207Success` to manually update list
     */
    it('allKt1207$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1207$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1207Actions.loadKt1207Success({
          kt1207: [createKt1207Entity('AAA'), createKt1207Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1207$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
