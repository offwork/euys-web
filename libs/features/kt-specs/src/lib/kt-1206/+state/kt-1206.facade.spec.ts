import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1206Actions from './kt-1206.actions';
import { Kt1206Effects } from './kt-1206.effects';
import { Kt1206Facade } from './kt-1206.facade';
import { Kt1206Entity } from './kt-1206.models';
import { KT_1206_FEATURE_KEY, State, initialState, reducer } from './kt-1206.reducer';
import * as Kt1206Selectors from './kt-1206.selectors';

interface TestSchema {
  kt1206: State;
}

describe('Kt1206Facade', () => {
  let facade: Kt1206Facade;
  let store: Store<TestSchema>;
  const createKt1206Entity = (id: string, name = ''): Kt1206Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1206_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1206Effects])],
        providers: [Kt1206Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1206Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1206$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1206$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1206Success` to manually update list
     */
    it('allKt1206$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1206$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1206Actions.loadKt1206Success({
          kt1206: [createKt1206Entity('AAA'), createKt1206Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1206$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
