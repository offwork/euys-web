import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as Kt1213Actions from './kt-1213.actions';
import { Kt1213Effects } from './kt-1213.effects';
import { Kt1213Facade } from './kt-1213.facade';
import { Kt1213Entity } from './kt-1213.models';
import { KT_1213_FEATURE_KEY, State, initialState, reducer } from './kt-1213.reducer';
import * as Kt1213Selectors from './kt-1213.selectors';

interface TestSchema {
  kt1213: State;
}

describe('Kt1213Facade', () => {
  let facade: Kt1213Facade;
  let store: Store<TestSchema>;
  const createKt1213Entity = (id: string, name = ''): Kt1213Entity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(KT_1213_FEATURE_KEY, reducer), EffectsModule.forFeature([Kt1213Effects])],
        providers: [Kt1213Facade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(Kt1213Facade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allKt1213$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allKt1213$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadKt1213Success` to manually update list
     */
    it('allKt1213$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allKt1213$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        Kt1213Actions.loadKt1213Success({
          kt1213: [createKt1213Entity('AAA'), createKt1213Entity('BBB')],
        })
      );

      list = await readFirst(facade.allKt1213$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
