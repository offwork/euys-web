import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { IsgucleriEntity } from './isgucleri.models';
import { IsgucleriEffects } from './isgucleri.effects';
import { IsgucleriFacade } from './isgucleri.facade';

import * as IsgucleriSelectors from './isgucleri.selectors';
import * as IsgucleriActions from './isgucleri.actions';
import { ISGUCLERI_FEATURE_KEY, State, initialState, reducer } from './isgucleri.reducer';

interface TestSchema {
  isgucleri: State;
}

describe('IsgucleriFacade', () => {
  let facade: IsgucleriFacade;
  let store: Store<TestSchema>;
  const createIsgucleriEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as IsgucleriEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [StoreModule.forFeature(ISGUCLERI_FEATURE_KEY, reducer), EffectsModule.forFeature([IsgucleriEffects])],
        providers: [IsgucleriFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(IsgucleriFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allIsgucleri$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allIsgucleri$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadIsgucleriSuccess` to manually update list
     */
    it('allIsgucleri$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allIsgucleri$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          IsgucleriActions.loadIsgucleriSuccess({
            isgucleri: [createIsgucleriEntity('AAA'), createIsgucleriEntity('BBB')],
          })
        );

        list = await readFirst(facade.allIsgucleri$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
