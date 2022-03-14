import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1364Actions from './kt-1364.actions';
import { Kt1364Effects } from './kt-1364.effects';
import { Kt1364Facade } from './kt-1364.facade';
import { Kt1364Entity } from './kt-1364.models';
import {
  KT_1364_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1364.reducer';
import * as Kt1364Selectors from './kt-1364.selectors';

interface TestSchema {
  kt1364: State;
}

describe('Kt1364Facade', () => {
  let facade: Kt1364Facade;
  let store: Store<TestSchema>;
  const createKt1364Entity = (id: string, name = ''): Kt1364Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1364_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1364Effects]),
        ],
        providers: [Kt1364Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1364Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1364$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1364$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1364Success` to manually update list
     */
    it('allKt1364$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1364$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1364Actions.loadKt1364Success({
          kt1364: [createKt1364Entity('AAA'), createKt1364Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1364$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
