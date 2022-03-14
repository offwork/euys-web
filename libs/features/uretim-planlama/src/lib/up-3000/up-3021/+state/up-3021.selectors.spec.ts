import { Up3021Entity } from './up-3021.models';
import {
  Up3021Adapter,
  Up3021PartialState,
  initialState,
} from './up-3021.reducer';
import * as Up3021Selectors from './up-3021.selectors';

describe('Up3021 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3021Id = (
    it: Up3021Entity
  ) => it.id;
  const createUp3021Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3021Entity);

  let state: Up3021PartialState;

  beforeEach(() => {
    state = {
      Up3021: Up3021Adapter.setAll(
        [
          createUp3021Entity('PRODUCT-AAA'),
          createUp3021Entity('PRODUCT-BBB'),
          createUp3021Entity('PRODUCT-CCC'),
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

  describe('Up3021 Selectors', () => {
    it('getAllUp3021() should return the list of Up3021', () => {
      const results =
        Up3021Selectors.getAllUp3021(
          state
        );
      const selId = getUp3021Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3021Selectors.getSelected(
        state
      ) as Up3021Entity;
      const selId = getUp3021Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3021Loaded() should return the current "loaded" status', () => {
      const result =
        Up3021Selectors.getUp3021Loaded(
          state
        );

      expect(result).toBe(true);
    });

    it('getUp3021Error() should return the current "error" state', () => {
      const result =
        Up3021Selectors.getUp3021Error(
          state
        );

      expect(result).toBe(ERROR_MSG);
    });
  });
});
