import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1238Actions from './kt-1238.actions';
import { Kt1238Effects } from './kt-1238.effects';
import { Kt1238Facade } from './kt-1238.facade';
import { Kt1238Entity } from './kt-1238.models';
import { KT_1238_FEATURE_KEY, State, initialState, reducer } from './kt-1238.reducer';
import * as Kt1238Selectors from './kt-1238.selectors';

interface TestSchema {
  kt1238: State;
}

describe('Kt1238Facade', () => {
  let facade: Kt1238Facade;
  let store: Store<TestSchema>;
  const createKt1238Entity = (id: string, name = ''): Kt1238Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1238_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1238Effects])],
        providers: [Kt1238Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1238Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1238$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1238$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1238Success` to manually update list
     */
    it('allKt1238$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1238$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1238Actions.loadKt1238Success({
          kt1238: [createKt1238Entity('AAA'), createKt1238Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1238$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
