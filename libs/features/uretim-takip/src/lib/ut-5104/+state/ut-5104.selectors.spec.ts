import { Ut5104Entity } from './ut-5104.models';
import {
  ut5104Adapter,
  Ut5104PartialState,
  initialState,
} from './ut-5104.reducer';
import * as Ut5104Selectors from './ut-5104.selectors';

describe('Ut5104 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5104Id = (it: Ut5104Entity) => it.id;
  const createUt5104Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5104Entity);

  let state: Ut5104PartialState;

  beforeEach(() => {
    state = {
      ut5104: ut5104Adapter.setAll(
        [
          createUt5104Entity('PRODUCT-AAA'),
          createUt5104Entity('PRODUCT-BBB'),
          createUt5104Entity('PRODUCT-CCC'),
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

  describe('Ut5104 Selectors', () => {
    it('getAllUt5104() should return the list of Ut5104', () => {
      const results = Ut5104Selectors.getAllUt5104(state);
      const selId = getUt5104Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5104Selectors.getSelected(state) as Ut5104Entity;
      const selId = getUt5104Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5104Loaded() should return the current "loaded" status', () => {
      const result = Ut5104Selectors.getUt5104Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5104Error() should return the current "error" state', () => {
      const result = Ut5104Selectors.getUt5104Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
