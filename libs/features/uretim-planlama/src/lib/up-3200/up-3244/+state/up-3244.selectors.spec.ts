import { Up3244Entity } from './up-3244.models';
import {
  up3244Adapter,
  Up3244PartialState,
  initialState,
} from './up-3244.reducer';
import * as Up3244Selectors from './up-3244.selectors';

describe('Up3244 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3244Id = (it: Up3244Entity) => it.id;
  const createUp3244Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3244Entity);

  let state: Up3244PartialState;

  beforeEach(() => {
    state = {
      up3244: up3244Adapter.setAll(
        [
          createUp3244Entity('PRODUCT-AAA'),
          createUp3244Entity('PRODUCT-BBB'),
          createUp3244Entity('PRODUCT-CCC'),
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

  describe('Up3244 Selectors', () => {
    it('getAllUp3244() should return the list of Up3244', () => {
      const results = Up3244Selectors.getAllUp3244(state);
      const selId = getUp3244Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3244Selectors.getSelected(state) as Up3244Entity;
      const selId = getUp3244Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3244Loaded() should return the current "loaded" status', () => {
      const result = Up3244Selectors.getUp3244Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3244Error() should return the current "error" state', () => {
      const result = Up3244Selectors.getUp3244Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
