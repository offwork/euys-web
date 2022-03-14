import { Ut5106Entity } from './ut-5106.models';
import {
  ut5106Adapter,
  Ut5106PartialState,
  initialState,
} from './ut-5106.reducer';
import * as Ut5106Selectors from './ut-5106.selectors';

describe('Ut5106 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5106Id = (it: Ut5106Entity) => it.id;
  const createUt5106Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5106Entity);

  let state: Ut5106PartialState;

  beforeEach(() => {
    state = {
      ut5106: ut5106Adapter.setAll(
        [
          createUt5106Entity('PRODUCT-AAA'),
          createUt5106Entity('PRODUCT-BBB'),
          createUt5106Entity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Ut5106 Selectors', () => {
    it('getAllUt5106() should return the list of Ut5106', () => {
      const results = Ut5106Selectors.getAllUt5106(state);
      const selId = getUt5106Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5106Selectors.getSelected(state) as Ut5106Entity;
      const selId = getUt5106Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5106Loaded() should return the current "loaded" status', () => {
      const result = Ut5106Selectors.getUt5106Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5106Error() should return the current "error" state', () => {
      const result = Ut5106Selectors.getUt5106Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
