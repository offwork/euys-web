import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SogukTarihGecikmeAnaliziEntity } from './soguk-tarih-gecikme-analizi.models';
import { SogukTarihGecikmeAnaliziEffects } from './soguk-tarih-gecikme-analizi.effects';
import { SogukTarihGecikmeAnaliziFacade } from './soguk-tarih-gecikme-analizi.facade';

import * as SogukTarihGecikmeAnaliziSelectors from './soguk-tarih-gecikme-analizi.selectors';
import * as SogukTarihGecikmeAnaliziActions from './soguk-tarih-gecikme-analizi.actions';
import {
  SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './soguk-tarih-gecikme-analizi.reducer';

interface TestSchema {
  sogukTarihGecikmeAnalizi: State;
}

describe('SogukTarihGecikmeAnaliziFacade', () => {
  let facade: SogukTarihGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createSogukTarihGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukTarihGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SOGUK_TARIH_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SogukTarihGecikmeAnaliziEffects]),
        ],
        providers: [SogukTarihGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SogukTarihGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSogukTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allSogukTarihGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSogukTarihGecikmeAnaliziSuccess` to manually update list
     */
    it('allSogukTarihGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSogukTarihGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          SogukTarihGecikmeAnaliziActions.loadSogukTarihGecikmeAnaliziSuccess({
            sogukTarihGecikmeAnalizi: [
              createSogukTarihGecikmeAnaliziEntity('AAA'),
              createSogukTarihGecikmeAnaliziEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSogukTarihGecikmeAnalizi$);
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
