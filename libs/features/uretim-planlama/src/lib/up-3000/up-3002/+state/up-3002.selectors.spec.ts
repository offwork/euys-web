import { Up3002Entity } from './up-3002.models';
import {
  Up3002Adapter,
  Up3002PartialState,
  initialState,
} from './up-3002.reducer';
import * as Up3002Selectors from './up-3002.selectors';

describe('Up3002 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3002Id = (
    it: Up3002Entity
  ) => it.id;
  const createUp3002Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3002Entity);

  let state: Up3002PartialState;

  beforeEach(() => {
    state = {
      Up3002: Up3002Adapter.setAll(
        [
          createUp3002Entity('PRODUCT-AAA'),
          createUp3002Entity('PRODUCT-BBB'),
          createUp3002Entity('PRODUCT-CCC'),
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

  describe('Up3002 Selectors', () => {
    it('getAllUp3002() should return the list of Up3002', () => {
      const results =
        Up3002Selectors.getAllUp3002(
          state
        );
      const selId = getUp3002Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3002Selectors.getSelected(
        state
      ) as Up3002Entity;
      const selId = getUp3002Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3002Loaded() should return the current "loaded" status', () => {
      const result =
        Up3002Selectors.getUp3002Loaded(
          state
        );

      expect(result).toBe(true);
    });

    it('getUp3002Error() should return the current "error" state', () => {
      const result =
        Up3002Selectors.getUp3002Error(
          state
        );

      expect(result).toBe(ERROR_MSG);
    });
  });
});
