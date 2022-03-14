import { Kt1320Entity } from './kt-1320.models';
import {
  kt1340Adapter,
  Kt1320PartialState,
  initialState,
} from './kt-1320.reducer';
import * as Kt1320Selectors from './kt-1320.selectors';

describe('Kt1320 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1320Id = (it: Kt1320Entity) => it.id;
  const createKt1320Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1320Entity);

  let state: Kt1320PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1320Entity('PRODUCT-AAA'),
          createKt1320Entity('PRODUCT-BBB'),
          createKt1320Entity('PRODUCT-CCC'),
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

  describe('Kt1320 Selectors', () => {
    it('getAllKt1320() should return the list of Kt1320', () => {
      const results = Kt1320Selectors.getAllKt1320(state);
      const selId = getKt1320Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1320Selectors.getSelected(state) as Kt1320Entity;
      const selId = getKt1320Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1320Loaded() should return the current "loaded" status', () => {
      const result = Kt1320Selectors.getKt1320Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1320Error() should return the current "error" state', () => {
      const result = Kt1320Selectors.getKt1320Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
