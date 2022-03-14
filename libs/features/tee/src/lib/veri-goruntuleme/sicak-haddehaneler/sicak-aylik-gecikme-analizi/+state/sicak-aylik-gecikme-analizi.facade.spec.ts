import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SicakAylikGecikmeAnaliziEntity } from './sicak-aylik-gecikme-analizi.models';
import { SicakAylikGecikmeAnaliziEffects } from './sicak-aylik-gecikme-analizi.effects';
import { SicakAylikGecikmeAnaliziFacade } from './sicak-aylik-gecikme-analizi.facade';

import * as SicakAylikGecikmeAnaliziSelectors from './sicak-aylik-gecikme-analizi.selectors';
import * as SicakAylikGecikmeAnaliziActions from './sicak-aylik-gecikme-analizi.actions';
import {
  SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './sicak-aylik-gecikme-analizi.reducer';

interface TestSchema {
  sicakAylikGecikmeAnalizi: State;
}

describe('SicakAylikGecikmeAnaliziFacade', () => {
  let facade: SicakAylikGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createSicakAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SICAK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SicakAylikGecikmeAnaliziEffects]),
        ],
        providers: [SicakAylikGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SicakAylikGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSicakAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allSicakAylikGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSicakAylikGecikmeAnaliziSuccess` to manually update list
     */
    it('allSicakAylikGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSicakAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          SicakAylikGecikmeAnaliziActions.loadSicakAylikGecikmeAnaliziSuccess({
            sicakAylikGecikmeAnalizi: [
              createSicakAylikGecikmeAnaliziEntity('AAA'),
              createSicakAylikGecikmeAnaliziEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSicakAylikGecikmeAnalizi$);
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
