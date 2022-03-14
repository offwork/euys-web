import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3016Actions from './up-3016.actions';
import { Up3016Effects } from './up-3016.effects';
import { Up3016Facade } from './up-3016.facade';
import { Up3016Entity } from './up-3016.models';
import {
  UP_3016_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3016.reducer';
import * as Up3016Selectors from './up-3016.selectors';

interface TestSchema {
  up3016: State;
}

describe('Up3016Facade', () => {
  let facade: Up3016Facade;
  let store: Store<TestSchema>;
  const createUp3016Entity = (id: string, name = ''): Up3016Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3016_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3016Effects]),
        ],
        providers: [Up3016Facade],
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
      facade = TestBed.inject(Up3016Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3016$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3016$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3016Success` to manually update list
     */
    it('allUp3016$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3016$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3016Actions.loadUp3016Success({
          up3016: [createUp3016Entity('AAA'), createUp3016Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3016$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
