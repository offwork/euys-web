import { Ut5108Entity } from './ut-5108.models';
import {
  ut5108Adapter,
  Ut5108PartialState,
  initialState,
} from './ut-5108.reducer';
import * as Ut5108Selectors from './ut-5108.selectors';

describe('Ut5108 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5108Id = (it: Ut5108Entity) => it.id;
  const createUt5108Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5108Entity);

  let state: Ut5108PartialState;

  beforeEach(() => {
    state = {
      ut5108: ut5108Adapter.setAll(
        [
          createUt5108Entity('PRODUCT-AAA'),
          createUt5108Entity('PRODUCT-BBB'),
          createUt5108Entity('PRODUCT-CCC'),
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

  describe('Ut5108 Selectors', () => {
    it('getAllUt5108() should return the list of Ut5108', () => {
      const results = Ut5108Selectors.getAllUt5108(state);
      const selId = getUt5108Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5108Selectors.getSelected(state) as Ut5108Entity;
      const selId = getUt5108Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5108Loaded() should return the current "loaded" status', () => {
      const result = Ut5108Selectors.getUt5108Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5108Error() should return the current "error" state', () => {
      const result = Ut5108Selectors.getUt5108Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
