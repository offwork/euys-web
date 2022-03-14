import { Ut6114Entity } from './ut-6114.models';
import {
  ut6114Adapter,
  Ut6114PartialState,
  initialState,
} from './ut-6114.reducer';
import * as Ut6114Selectors from './ut-6114.selectors';

describe('Ut6114 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt6114Id = (it: Ut6114Entity) => it.id;
  const createUt6114Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut6114Entity);

  let state: Ut6114PartialState;

  beforeEach(() => {
    state = {
      ut6114: ut6114Adapter.setAll(
        [
          createUt6114Entity('PRODUCT-AAA'),
          createUt6114Entity('PRODUCT-BBB'),
          createUt6114Entity('PRODUCT-CCC'),
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

  describe('Ut6114 Selectors', () => {
    it('getAllUt6114() should return the list of Ut6114', () => {
      const results = Ut6114Selectors.getAllUt6114(state);
      const selId = getUt6114Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut6114Selectors.getSelected(state) as Ut6114Entity;
      const selId = getUt6114Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt6114Loaded() should return the current "loaded" status', () => {
      const result = Ut6114Selectors.getUt6114Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt6114Error() should return the current "error" state', () => {
      const result = Ut6114Selectors.getUt6114Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
