import { Kt1341Entity } from './kt-1341.models';
import {
  kt1340Adapter,
  Kt1341PartialState,
  initialState,
} from './kt-1341.reducer';
import * as Kt1341Selectors from './kt-1341.selectors';

describe('Kt1341 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1341Id = (it: Kt1341Entity) => it.id;
  const createKt1341Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1341Entity);

  let state: Kt1341PartialState;

  beforeEach(() => {
    state = {
      kt1340: kt1340Adapter.setAll(
        [
          createKt1341Entity('PRODUCT-AAA'),
          createKt1341Entity('PRODUCT-BBB'),
          createKt1341Entity('PRODUCT-CCC'),
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

  describe('Kt1341 Selectors', () => {
    it('getAllKt1341() should return the list of Kt1341', () => {
      const results = Kt1341Selectors.getAllKt1341(state);
      const selId = getKt1341Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1341Selectors.getSelected(state) as Kt1341Entity;
      const selId = getKt1341Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1341Loaded() should return the current "loaded" status', () => {
      const result = Kt1341Selectors.getKt1341Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1341Error() should return the current "error" state', () => {
      const result = Kt1341Selectors.getKt1341Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
