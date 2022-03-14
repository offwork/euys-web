import { Ut5103Entity } from './ut-5103.models';
import {
  ut5103Adapter,
  Ut5103PartialState,
  initialState,
} from './ut-5103.reducer';
import * as Ut5103Selectors from './ut-5103.selectors';

describe('Ut5103 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5103Id = (it: Ut5103Entity) => it.id;
  const createUt5103Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5103Entity);

  let state: Ut5103PartialState;

  beforeEach(() => {
    state = {
      ut5103: ut5103Adapter.setAll(
        [
          createUt5103Entity('PRODUCT-AAA'),
          createUt5103Entity('PRODUCT-BBB'),
          createUt5103Entity('PRODUCT-CCC'),
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

  describe('Ut5103 Selectors', () => {
    it('getAllUt5103() should return the list of Ut5103', () => {
      const results = Ut5103Selectors.getAllUt5103(state);
      const selId = getUt5103Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5103Selectors.getSelected(state) as Ut5103Entity;
      const selId = getUt5103Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5103Loaded() should return the current "loaded" status', () => {
      const result = Ut5103Selectors.getUt5103Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5103Error() should return the current "error" state', () => {
      const result = Ut5103Selectors.getUt5103Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
