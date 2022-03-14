import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1221Actions from './kt-1221.actions';
import { Kt1221Effects } from './kt-1221.effects';
import { Kt1221Facade } from './kt-1221.facade';
import { Kt1221Entity } from './kt-1221.models';
import { KT_1221_FEATURE_KEY, State, initialState, reducer } from './kt-1221.reducer';
import * as Kt1221Selectors from './kt-1221.selectors';

interface TestSchema {
  kt1221: State;
}

describe('Kt1221Facade', () => {
  let facade: Kt1221Facade;
  let store: Store<TestSchema>;
  const createKt1221Entity = (id: string, name = ''): Kt1221Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1221_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1221Effects])],
        providers: [Kt1221Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1221Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1221$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1221$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1221Success` to manually update list
     */
    it('allKt1221$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1221$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1221Actions.loadKt1221Success({
          kt1221: [createKt1221Entity('AAA'), createKt1221Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1221$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
