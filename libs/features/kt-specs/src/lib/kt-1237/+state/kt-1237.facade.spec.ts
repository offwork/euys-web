import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1237Actions from './kt-1237.actions';
import { Kt1237Effects } from './kt-1237.effects';
import { Kt1237Facade } from './kt-1237.facade';
import { Kt1237Entity } from './kt-1237.models';
import { KT_1237_FEATURE_KEY, State, initialState, reducer } from './kt-1237.reducer';
import * as Kt1237Selectors from './kt-1237.selectors';

interface TestSchema {
  kt1237: State;
}

describe('Kt1237Facade', () => {
  let facade: Kt1237Facade;
  let store: Store<TestSchema>;
  const createKt1237Entity = (id: string, name = ''): Kt1237Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1237_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1237Effects])],
        providers: [Kt1237Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1237Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1237$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1237$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1237Success` to manually update list
     */
    it('allKt1237$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1237$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1237Actions.loadKt1237Success({
          kt1237: [createKt1237Entity('AAA'), createKt1237Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1237$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
