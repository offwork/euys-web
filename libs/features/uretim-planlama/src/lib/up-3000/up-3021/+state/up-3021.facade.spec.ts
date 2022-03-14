import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3021Actions from './up-3021.actions';
import { Up3021Effects } from './up-3021.effects';
import { Up3021Facade } from './up-3021.facade';
import { Up3021Entity } from './up-3021.models';
import {
  GUNLUK_PROJEKSIYON_GORUNTULEME_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './up-3021.reducer';
import * as Up3021Selectors from './up-3021.selectors';

interface TestSchema {
  Up3021: State;
}

describe('Up3021Facade', () => {
  let facade: Up3021Facade;
  let store: Store<TestSchema>;
  const createUp3021Entity = (
    id: string,
    name = ''
  ): Up3021Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(
            GUNLUK_PROJEKSIYON_GORUNTULEME_FEATURE_KEY,
            reducer
          ),
          EffectsModule.forFeature([Up3021Effects]),
        ],
        providers: [Up3021Facade],
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
      facade = TestBed.inject(Up3021Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3021$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3021$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3021Success` to manually update list
     */
    it('allUp3021$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3021$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3021Actions.loadUp3021Success(
          {
            Up3021: [
              createUp3021Entity('AAA'),
              createUp3021Entity('BBB'),
            ],
          }
        )
      );

      list = await readFirst(facade.allUp3021$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
