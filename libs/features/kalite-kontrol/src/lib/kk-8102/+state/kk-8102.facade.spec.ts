import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kk8102Actions from './kk-8102.actions';
import { Kk8102Effects } from './kk-8102.effects';
import { Kk8102Facade } from './kk-8102.facade';
import { Kk8102Entity } from './kk-8102.models';
import {
  KK_8102_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kk-8102.reducer';
import * as Kk8102Selectors from './kk-8102.selectors';

interface TestSchema {
  kk8102: State;
}

describe('Kk8102Facade', () => {
  let facade: Kk8102Facade;
  let store: Store<TestSchema>;
  const createKk8102Entity = (id: string, name = ''): Kk8102Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KK_8102_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Kk8102Effects]),
        ],
        providers: [Kk8102Facade],
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
      facade = TestBed.inject(Kk8102Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKk8102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKk8102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKk8102Success` to manually update list
     */
    it('allKk8102$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKk8102$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kk8102Actions.loadKk8102Success({
          kk8102: [createKk8102Entity('AAA'), createKk8102Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKk8102$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
