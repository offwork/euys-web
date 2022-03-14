import { Ut5101Entity } from './ut-5101.models';
import {
  Ut5101Adapter,
  Ut5101PartialState,
  initialState,
} from './ut-5101.reducer';
import * as Ut5101Selectors from './ut-5101.selectors';

describe('Ut5101 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUt5101Id = (it: Ut5101Entity) => it.id;
  const createUt5101Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Ut5101Entity);

  let state: Ut5101PartialState;

  beforeEach(() => {
    state = {
      Ut5101: Ut5101Adapter.setAll(
        [
          createUt5101Entity('PRODUCT-AAA'),
          createUt5101Entity('PRODUCT-BBB'),
          createUt5101Entity('PRODUCT-CCC'),
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

  describe('Ut5101 Selectors', () => {
    it('getAllUt5101() should return the list of Ut5101', () => {
      const results = Ut5101Selectors.getAllUt5101(state);
      const selId = getUt5101Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Ut5101Selectors.getSelected(
        state
      ) as Ut5101Entity;
      const selId = getUt5101Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUt5101Loaded() should return the current "loaded" status', () => {
      const result = Ut5101Selectors.getUt5101Loaded(state);

      expect(result).toBe(true);
    });

    it('getUt5101Error() should return the current "error" state', () => {
      const result = Ut5101Selectors.getUt5101Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
