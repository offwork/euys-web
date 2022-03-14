import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1259Actions from './kt-1259.actions';
import { Kt1259Effects } from './kt-1259.effects';
import { Kt1259Facade } from './kt-1259.facade';
import { Kt1259Entity } from './kt-1259.models';
import {
  KT_1259_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1259.reducer';
import * as Kt1259Selectors from './kt-1259.selectors';

interface TestSchema {
  kt1259: State;
}

describe('Kt1259Facade', () => {
  let facade: Kt1259Facade;
  let store: Store<TestSchema>;
  const createKt1259Entity = (id: string, name = ''): Kt1259Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1259_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1259Effects]),
        ],
        providers: [Kt1259Facade],
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
      facade = TestBed.inject(Kt1259Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1259$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1259$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1259Success` to manually update list
     */
    it('allKt1259$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1259$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1259Actions.loadKt1259Success({
          kt1259: [createKt1259Entity('AAA'), createKt1259Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1259$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
