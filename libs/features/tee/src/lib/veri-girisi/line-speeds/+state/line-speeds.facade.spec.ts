import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { LineSpeedsEntity } from './line-speeds.models';
import { LineSpeedsEffects } from './line-speeds.effects';
import { LineSpeedsFacade } from './line-speeds.facade';

import * as LineSpeedsSelectors from './line-speeds.selectors';
import * as LineSpeedsActions from './line-speeds.actions';
import { LINESPEEDS_FEATURE_KEY, State, initialState, reducer } from './line-speeds.reducer';

interface TestSchema {
  lineSpeeds: State;
}

describe('LineSpeedsFacade', () => {
  let facade: LineSpeedsFacade;
  let store: Store<TestSchema>;
  const createLineSpeedsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LineSpeedsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(LINESPEEDS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([LineSpeedsEffects]),
        ],
        providers: [LineSpeedsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(LineSpeedsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allLineSpeeds$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allLineSpeeds$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadLineSpeedsSuccess` to manually update list
     */
    it('allLineSpeeds$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allLineSpeeds$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          LineSpeedsActions.loadLineSpeedsSuccess({
            lineSpeeds: [createLineSpeedsEntity('AAA'), createLineSpeedsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allLineSpeeds$);
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
