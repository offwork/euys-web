import { Up3020Entity } from './up-3020.models';
import {
  Up3020Adapter,
  Up3020PartialState,
  initialState,
} from './up-3020.reducer';
import * as Up3020Selectors from './up-3020.selectors';

describe('Up3020 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3020Id = (it: Up3020Entity) =>
    it.id;
  const createUp3020Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3020Entity);

  let state: Up3020PartialState;

  beforeEach(() => {
    state = {
      Up3020: Up3020Adapter.setAll(
        [
          createUp3020Entity('PRODUCT-AAA'),
          createUp3020Entity('PRODUCT-BBB'),
          createUp3020Entity('PRODUCT-CCC'),
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

  describe('Up3020 Selectors', () => {
    it('getAllUp3020() should return the list of Up3020', () => {
      const results =
        Up3020Selectors.getAllUp3020(state);
      const selId = getUp3020Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3020Selectors.getSelected(
        state
      ) as Up3020Entity;
      const selId = getUp3020Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3020Loaded() should return the current "loaded" status', () => {
      const result =
        Up3020Selectors.getUp3020Loaded(
          state
        );

      expect(result).toBe(true);
    });

    it('getUp3020Error() should return the current "error" state', () => {
      const result =
        Up3020Selectors.getUp3020Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
