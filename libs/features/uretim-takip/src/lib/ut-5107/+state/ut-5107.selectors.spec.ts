import { Ut5107Entity } from './ut-5107.models';
import {
  ut5107Adapter,
  Ut5107PartialState,
  initialState,
} from './ut-5107.reducer';
import * as Ut5107Selectors from './ut-5107.selectors';

describe('Ut5107 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5107Id = (it: Ut5107Entity) => it.id;
  const createUt5107Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5107Entity);

  let state: Ut5107PartialState;

  beforeEach(() => {
    state = {
      ut5107: ut5107Adapter.setAll(
        [
          createUt5107Entity('PRODUCT-AAA'),
          createUt5107Entity('PRODUCT-BBB'),
          createUt5107Entity('PRODUCT-CCC'),
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

  describe('Ut5107 Selectors', () => {
    it('getAllUt5107() should return the list of Ut5107', () => {
      const results = Ut5107Selectors.getAllUt5107(state);
      const selId = getUt5107Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5107Selectors.getSelected(state) as Ut5107Entity;
      const selId = getUt5107Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5107Loaded() should return the current "loaded" status', () => {
      const result = Ut5107Selectors.getUt5107Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5107Error() should return the current "error" state', () => {
      const result = Ut5107Selectors.getUt5107Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
