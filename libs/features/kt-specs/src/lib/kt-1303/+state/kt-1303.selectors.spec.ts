import { Kt1303Entity } from './kt-1303.models';
import {
  kt1303Adapter,
  Kt1303PartialState,
  initialState,
} from './kt-1303.reducer';
import * as Kt1303Selectors from './kt-1303.selectors';

describe('Kt1303 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1303Id = (it: Kt1303Entity) => it.id;
  const createKt1303Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1303Entity);

  let state: Kt1303PartialState;

  beforeEach(() => {
    state = {
      kt1303: kt1303Adapter.setAll(
        [
          createKt1303Entity('PRODUCT-AAA'),
          createKt1303Entity('PRODUCT-BBB'),
          createKt1303Entity('PRODUCT-CCC'),
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

  describe('Kt1303 Selectors', () => {
    it('getAllKt1303() should return the list of Kt1303', () => {
      const results = Kt1303Selectors.getAllKt1303(state);
      const selId = getKt1303Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1303Selectors.getSelected(state) as Kt1303Entity;
      const selId = getKt1303Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1303Loaded() should return the current "loaded" status', () => {
      const result = Kt1303Selectors.getKt1303Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1303Error() should return the current "error" state', () => {
      const result = Kt1303Selectors.getKt1303Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
