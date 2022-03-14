import { Kt1315Entity } from './kt-1315.models';
import {
  kt1315Adapter,
  Kt1315PartialState,
  initialState,
} from './kt-1315.reducer';
import * as Kt1315Selectors from './kt-1315.selectors';

describe('Kt1315 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1315Id = (it: Kt1315Entity) => it.id;
  const createKt1315Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1315Entity);

  let state: Kt1315PartialState;

  beforeEach(() => {
    state = {
      kt1315: kt1315Adapter.setAll(
        [
          createKt1315Entity('PRODUCT-AAA'),
          createKt1315Entity('PRODUCT-BBB'),
          createKt1315Entity('PRODUCT-CCC'),
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

  describe('Kt1315 Selectors', () => {
    it('getAllKt1315() should return the list of Kt1315', () => {
      const results = Kt1315Selectors.getAllKt1315(state);
      const selId = getKt1315Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1315Selectors.getSelected(state) as Kt1315Entity;
      const selId = getKt1315Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1315Loaded() should return the current "loaded" status', () => {
      const result = Kt1315Selectors.getKt1315Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1315Error() should return the current "error" state', () => {
      const result = Kt1315Selectors.getKt1315Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
