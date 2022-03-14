import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1205Actions from './kt-1205.actions';
import { Kt1205Effects } from './kt-1205.effects';
import { Kt1205Facade } from './kt-1205.facade';
import { Kt1205Entity } from './kt-1205.models';
import { KT_1205_FEATURE_KEY, State, initialState, reducer } from './kt-1205.reducer';
import * as Kt1205Selectors from './kt-1205.selectors';

interface TestSchema {
  kt1205: State;
}

describe('Kt1205Facade', () => {
  let facade: Kt1205Facade;
  let store: Store<TestSchema>;
  const createKt1205Entity = (id: string, name = ''): Kt1205Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1205_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1205Effects])],
        providers: [Kt1205Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1205Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1205$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1205$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1205Success` to manually update list
     */
    it('allKt1205$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1205$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1205Actions.loadKt1205Success({
          kt1205: [createKt1205Entity('AAA'), createKt1205Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1205$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
