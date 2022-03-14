import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { SogukAylikGecikmeAnaliziEntity } from './soguk-aylik-gecikme-analizi.models';
import { SogukAylikGecikmeAnaliziEffects } from './soguk-aylik-gecikme-analizi.effects';
import { SogukAylikGecikmeAnaliziFacade } from './soguk-aylik-gecikme-analizi.facade';

import * as SogukAylikGecikmeAnaliziSelectors from './soguk-aylik-gecikme-analizi.selectors';
import * as SogukAylikGecikmeAnaliziActions from './soguk-aylik-gecikme-analizi.actions';
import {
  SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './soguk-aylik-gecikme-analizi.reducer';

interface TestSchema {
  sogukAylikGecikmeAnalizi: State;
}

describe('SogukAylikGecikmeAnaliziFacade', () => {
  let facade: SogukAylikGecikmeAnaliziFacade;
  let store: Store<TestSchema>;
  const createSogukAylikGecikmeAnaliziEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SogukAylikGecikmeAnaliziEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SOGUK_AYLIK_GECIKME_ANALIZI_FEATURE_KEY, reducer),
          EffectsModule.forFeature([SogukAylikGecikmeAnaliziEffects]),
        ],
        providers: [SogukAylikGecikmeAnaliziFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(SogukAylikGecikmeAnaliziFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allSogukAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allSogukAylikGecikmeAnalizi$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadSogukAylikGecikmeAnaliziSuccess` to manually update list
     */
    it('allSogukAylikGecikmeAnalizi$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allSogukAylikGecikmeAnalizi$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          SogukAylikGecikmeAnaliziActions.loadSogukAylikGecikmeAnaliziSuccess({
            sogukAylikGecikmeAnalizi: [
              createSogukAylikGecikmeAnaliziEntity('AAA'),
              createSogukAylikGecikmeAnaliziEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allSogukAylikGecikmeAnalizi$);
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
