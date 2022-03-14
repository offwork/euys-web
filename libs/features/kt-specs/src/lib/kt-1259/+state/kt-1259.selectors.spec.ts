import { Kt1259Entity } from './kt-1259.models';
import {
  kt1259Adapter,
  Kt1259PartialState,
  initialState,
} from './kt-1259.reducer';
import * as Kt1259Selectors from './kt-1259.selectors';

describe('Kt1259 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1259Id = (it: Kt1259Entity) => it.id;
  const createKt1259Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1259Entity);

  let state: Kt1259PartialState;

  beforeEach(() => {
    state = {
      kt1259: kt1259Adapter.setAll(
        [
          createKt1259Entity('PRODUCT-AAA'),
          createKt1259Entity('PRODUCT-BBB'),
          createKt1259Entity('PRODUCT-CCC'),
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

  describe('Kt1259 Selectors', () => {
    it('getAllKt1259() should return the list of Kt1259', () => {
      const results = Kt1259Selectors.getAllKt1259(state);
      const selId = getKt1259Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1259Selectors.getSelected(state) as Kt1259Entity;
      const selId = getKt1259Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1259Loaded() should return the current "loaded" status', () => {
      const result = Kt1259Selectors.getKt1259Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1259Error() should return the current "error" state', () => {
      const result = Kt1259Selectors.getKt1259Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
