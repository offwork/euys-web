import { Up3004Entity } from './up-3004.models';
import {
  up3004Adapter,
  Up3004PartialState,
  initialState,
} from './up-3004.reducer';
import * as Up3004Selectors from './up-3004.selectors';

describe('Up3004 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUp3004Id = (it: Up3004Entity) => it.id;
  const createUp3004Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Up3004Entity);

  let state: Up3004PartialState;

  beforeEach(() => {
    state = {
      up3004: up3004Adapter.setAll(
        [
          createUp3004Entity('PRODUCT-AAA'),
          createUp3004Entity('PRODUCT-BBB'),
          createUp3004Entity('PRODUCT-CCC'),
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

  describe('Up3004 Selectors', () => {
    it('getAllUp3004() should return the list of Up3004', () => {
      const results = Up3004Selectors.getAllUp3004(state);
      const selId = getUp3004Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Up3004Selectors.getSelected(state) as Up3004Entity;
      const selId = getUp3004Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getUp3004Loaded() should return the current "loaded" status', () => {
      const result = Up3004Selectors.getUp3004Loaded(state);

      expect(result).toBe(true);
    });

    it('getUp3004Error() should return the current "error" state', () => {
      const result = Up3004Selectors.getUp3004Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
