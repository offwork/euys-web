import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1230Actions from './kt-1230.actions';
import { Kt1230Effects } from './kt-1230.effects';
import { Kt1230Facade } from './kt-1230.facade';
import { Kt1230Entity } from './kt-1230.models';
import { KT_1230_FEATURE_KEY, State, initialState, reducer } from './kt-1230.reducer';
import * as Kt1230Selectors from './kt-1230.selectors';

interface TestSchema {
  kt1230: State;
}

describe('Kt1230Facade', () => {
  let facade: Kt1230Facade;
  let store: Store<TestSchema>;
  const createKt1230Entity = (id: string, name = ''): Kt1230Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1230_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1230Effects])],
        providers: [Kt1230Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1230Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1230$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1230$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1230Success` to manually update list
     */
    it('allKt1230$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1230$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1230Actions.loadKt1230Success({
          kt1230: [createKt1230Entity('AAA'), createKt1230Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1230$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
