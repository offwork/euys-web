import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1260Actions from './kt-1260.actions';
import { Kt1260Effects } from './kt-1260.effects';
import { Kt1260Facade } from './kt-1260.facade';
import { Kt1260Entity } from './kt-1260.models';
import {
  KT_1260_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1260.reducer';
import * as Kt1260Selectors from './kt-1260.selectors';

interface TestSchema {
  kt1260: State;
}

describe('Kt1260Facade', () => {
  let facade: Kt1260Facade;
  let store: Store<TestSchema>;
  const createKt1260Entity = (id: string, name = ''): Kt1260Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1260_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1260Effects]),
        ],
        providers: [Kt1260Facade],
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
      facade = TestBed.inject(Kt1260Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1260$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1260$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1260Success` to manually update list
     */
    it('allKt1260$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1260$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1260Actions.loadKt1260Success({
          kt1260: [createKt1260Entity('AAA'), createKt1260Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1260$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
