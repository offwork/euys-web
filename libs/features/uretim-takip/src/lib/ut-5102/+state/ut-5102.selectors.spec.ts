import { Ut5102Entity } from './ut-5102.models';
import {
  ut5102Adapter,
  Ut5102PartialState,
  initialState,
} from './ut-5102.reducer';
import * as Ut5102Selectors from './ut-5102.selectors';

describe('Ut5102 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5102Id = (it: Ut5102Entity) => it.id;
  const createUt5102Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5102Entity);

  let state: Ut5102PartialState;

  beforeEach(() => {
    state = {
      ut5102: ut5102Adapter.setAll(
        [
          createUt5102Entity('PRODUCT-AAA'),
          createUt5102Entity('PRODUCT-BBB'),
          createUt5102Entity('PRODUCT-CCC'),
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

  describe('Ut5102 Selectors', () => {
    it('getAllUt5102() should return the list of Ut5102', () => {
      const results = Ut5102Selectors.getAllUt5102(state);
      const selId = getUt5102Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5102Selectors.getSelected(state) as Ut5102Entity;
      const selId = getUt5102Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5102Loaded() should return the current "loaded" status', () => {
      const result = Ut5102Selectors.getUt5102Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5102Error() should return the current "error" state', () => {
      const result = Ut5102Selectors.getUt5102Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
