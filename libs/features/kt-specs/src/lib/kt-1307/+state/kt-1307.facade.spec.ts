import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1307Actions from './kt-1307.actions';
import { Kt1307Effects } from './kt-1307.effects';
import { Kt1307Facade } from './kt-1307.facade';
import { Kt1307Entity } from './kt-1307.models';
import {
  KT_1307_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1307.reducer';
import * as Kt1307Selectors from './kt-1307.selectors';

interface TestSchema {
  kt1307: State;
}

describe('Kt1307Facade', () => {
  let facade: Kt1307Facade;
  let store: Store<TestSchema>;
  const createKt1307Entity = (id: string, name = ''): Kt1307Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1307_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1307Effects]),
        ],
        providers: [Kt1307Facade],
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
      facade = TestBed.inject(Kt1307Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1307$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1307$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1307Success` to manually update list
     */
    it('allKt1307$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1307$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1307Actions.loadKt1307Success({
          kt1307: [createKt1307Entity('AAA'), createKt1307Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1307$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
