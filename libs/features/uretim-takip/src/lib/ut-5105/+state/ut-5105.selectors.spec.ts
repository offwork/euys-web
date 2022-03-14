import { Ut5105Entity } from './ut-5105.models';
import {
  ut5105Adapter,
  Ut5105PartialState,
  initialState,
} from './ut-5105.reducer';
import * as Ut5105Selectors from './ut-5105.selectors';

describe('Ut5105 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5105Id = (it: Ut5105Entity) => it.id;
  const createUt5105Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5105Entity);

  let state: Ut5105PartialState;

  beforeEach(() => {
    state = {
      ut5105: ut5105Adapter.setAll(
        [
          createUt5105Entity('PRODUCT-AAA'),
          createUt5105Entity('PRODUCT-BBB'),
          createUt5105Entity('PRODUCT-CCC'),
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

  describe('Ut5105 Selectors', () => {
    it('getAllUt5105() should return the list of Ut5105', () => {
      const results = Ut5105Selectors.getAllUt5105(state);
      const selId = getUt5105Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5105Selectors.getSelected(state) as Ut5105Entity;
      const selId = getUt5105Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5105Loaded() should return the current "loaded" status', () => {
      const result = Ut5105Selectors.getUt5105Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5105Error() should return the current "error" state', () => {
      const result = Ut5105Selectors.getUt5105Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
