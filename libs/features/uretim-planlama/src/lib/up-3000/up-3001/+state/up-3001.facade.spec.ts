import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Up3001Actions from './up-3001.actions';
import { Up3001Effects } from './up-3001.effects';
import { Up3001Facade } from './up-3001.facade';
import { Up3001Entity } from './up-3001.models';
import { UP_3001_FEATURE_KEY, State, initialState, reducer } from './up-3001.reducer';
import * as Up3001Selectors from './up-3001.selectors';

interface TestSchema {
  Up3001: State;
}

describe('Up3001Facade', () => {
  let facade: Up3001Facade;
  let store: Store<TestSchema>;
  const createUp3001Entity = (id: string, name = ''): Up3001Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UP_3001_FEATURE_KEY, reducer),
          EffectsModule.forFeature([Up3001Effects]),
        ],
        providers: [Up3001Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Up3001Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allUp3001$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allUp3001$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadUp3001Success` to manually update list
     */
    it('allUp3001$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allUp3001$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Up3001Actions.loadUp3001Success({
          Up3001: [createUp3001Entity('AAA'), createUp3001Entity('BBB')],
        })
      );

      list = await readFirst(facade.allUp3001$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
