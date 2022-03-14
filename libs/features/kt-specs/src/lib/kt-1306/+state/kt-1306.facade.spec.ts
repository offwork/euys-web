import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1306Actions from './kt-1306.actions';
import { Kt1306Effects } from './kt-1306.effects';
import { Kt1306Facade } from './kt-1306.facade';
import { Kt1306Entity } from './kt-1306.models';
import {
  KT_1306_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kt-1306.reducer';
import * as Kt1306Selectors from './kt-1306.selectors';

interface TestSchema {
  kt1340: State;
}

describe('Kt1306Facade', () => {
  let facade: Kt1306Facade;
  let store: Store<TestSchema>;
  const createKt1306Entity = (id: string, name = ''): Kt1306Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KT_1306_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kt1306Effects]),
        ],
        providers: [Kt1306Facade],
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
      facade = TestBed.inject(Kt1306Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1306$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1306$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1306Success` to manually update list
     */
    it('allKt1306$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1306$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1306Actions.loadKt1306Success({
          kt1340: [createKt1306Entity('AAA'), createKt1306Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1306$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
