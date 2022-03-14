import { Ut6113Entity } from './ut-6113.models';
import {
  ut6113Adapter,
  Ut6113PartialState,
  initialState,
} from './ut-6113.reducer';
import * as Ut6113Selectors from './ut-6113.selectors';

describe('Ut6113 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt6113Id = (it: Ut6113Entity) => it.id;
  const createUt6113Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut6113Entity);

  let state: Ut6113PartialState;

  beforeEach(() => {
    state = {
      ut6113: ut6113Adapter.setAll(
        [
          createUt6113Entity('PRODUCT-AAA'),
          createUt6113Entity('PRODUCT-BBB'),
          createUt6113Entity('PRODUCT-CCC'),
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

  describe('Ut6113 Selectors', () => {
    it('getAllUt6113() should return the list of Ut6113', () => {
      const results = Ut6113Selectors.getAllUt6113(state);
      const selId = getUt6113Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut6113Selectors.getSelected(state) as Ut6113Entity;
      const selId = getUt6113Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt6113Loaded() should return the current "loaded" status', () => {
      const result = Ut6113Selectors.getUt6113Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt6113Error() should return the current "error" state', () => {
      const result = Ut6113Selectors.getUt6113Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
