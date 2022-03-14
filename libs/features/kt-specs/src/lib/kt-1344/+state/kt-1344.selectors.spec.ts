import { Kt1344Entity } from './kt-1344.models';
import {
  kt1344Adapter,
  Kt1344PartialState,
  initialState,
} from './kt-1344.reducer';
import * as Kt1344Selectors from './kt-1344.selectors';

describe('Kt1344 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1344Id = (it: Kt1344Entity) => it.id;
  const createKt1344Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1344Entity);

  let state: Kt1344PartialState;

  beforeEach(() => {
    state = {
      kt1344: kt1344Adapter.setAll(
        [
          createKt1344Entity('PRODUCT-AAA'),
          createKt1344Entity('PRODUCT-BBB'),
          createKt1344Entity('PRODUCT-CCC'),
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

  describe('Kt1344 Selectors', () => {
    it('getAllKt1344() should return the list of Kt1344', () => {
      const results = Kt1344Selectors.getAllKt1344(state);
      const selId = getKt1344Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1344Selectors.getSelected(state) as Kt1344Entity;
      const selId = getKt1344Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1344Loaded() should return the current "loaded" status', () => {
      const result = Kt1344Selectors.getKt1344Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1344Error() should return the current "error" state', () => {
      const result = Kt1344Selectors.getKt1344Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
