import { Kt1332Entity } from './kt-1332.models';
import {
  kt1332Adapter,
  Kt1332PartialState,
  initialState,
} from './kt-1332.reducer';
import * as Kt1332Selectors from './kt-1332.selectors';

describe('Kt1332 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1332Id = (it: Kt1332Entity) => it.id;
  const createKt1332Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1332Entity);

  let state: Kt1332PartialState;

  beforeEach(() => {
    state = {
      kt1332: kt1332Adapter.setAll(
        [
          createKt1332Entity('PRODUCT-AAA'),
          createKt1332Entity('PRODUCT-BBB'),
          createKt1332Entity('PRODUCT-CCC'),
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

  describe('Kt1332 Selectors', () => {
    it('getAllKt1332() should return the list of Kt1332', () => {
      const results = Kt1332Selectors.getAllKt1332(state);
      const selId = getKt1332Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1332Selectors.getSelected(state) as Kt1332Entity;
      const selId = getKt1332Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1332Loaded() should return the current "loaded" status', () => {
      const result = Kt1332Selectors.getKt1332Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1332Error() should return the current "error" state', () => {
      const result = Kt1332Selectors.getKt1332Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
