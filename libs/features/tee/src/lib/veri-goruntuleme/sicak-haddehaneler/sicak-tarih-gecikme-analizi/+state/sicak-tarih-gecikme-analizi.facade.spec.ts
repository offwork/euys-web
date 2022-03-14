import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SicakTarihGecikmeAnaliziEntity } from './sicak-tarih-gecikme-analizi.models';
import { SicakTarihGecikmeAnaliziEffects } from './sicak-tarih-gecikme-analizi.effects';
import { SicakTarihGecikmeAnaliziFacade } from './sicak-tarih-gecikme-analizi.facade';

import * as SicakTarihGecikmeAnaliziSelectors from './sicak-tarih-gecikme-analizi.selectors';
import * as SicakTarihGecikmeAnaliziActions from './sicak-tarih-gecikme-analizi.actions';
import {
  SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './sicak-tarih-gecikme-analizi.reducer';

interface TestSchema {
  sicakTarihGecikmeAnalizi: State;
}

describe('SicakTarihGecikmeAnaliziFacade', () => {
  let facade: SicakTarihGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createSicakTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SicakTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SICAK_TARIH_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SicakTarihGecikmeAnaliziEffects]),
        ],
        providers: [SicakTarihGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SicakTarihGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSicakTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allSicakTarihGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSicakTarihGecikmeAnaliziSuccess` to manually update list
     */
    it('allSicakTarihGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSicakTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          SicakTarihGecikmeAnaliziActions.loadSicakTarihGecikmeAnaliziSuccess({
            sicakTarihGecikmeAnalizi: [
              createSicakTarihGecikmeAnaliziEntity('AAA'),
              createSicakTarihGecikmeAnaliziEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSicakTarihGecikmeAnalizi$);
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
