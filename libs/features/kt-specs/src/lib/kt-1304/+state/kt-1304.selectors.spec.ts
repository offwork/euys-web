import { Kt1304Entity } from './kt-1304.models';
import {
  kt1304Adapter,
  Kt1304PartialState,
  initialState,
} from './kt-1304.reducer';
import * as Kt1304Selectors from './kt-1304.selectors';

describe('Kt1304 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1304Id = (it: Kt1304Entity) => it.id;
  const createKt1304Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1304Entity);

  let state: Kt1304PartialState;

  beforeEach(() => {
    state = {
      kt1304: kt1304Adapter.setAll(
        [
          createKt1304Entity('PRODUCT-AAA'),
          createKt1304Entity('PRODUCT-BBB'),
          createKt1304Entity('PRODUCT-CCC'),
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

  describe('Kt1304 Selectors', () => {
    it('getAllKt1304() should return the list of Kt1304', () => {
      const results = Kt1304Selectors.getAllKt1304(state);
      const selId = getKt1304Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1304Selectors.getSelected(state) as Kt1304Entity;
      const selId = getKt1304Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1304Loaded() should return the current "loaded" status', () => {
      const result = Kt1304Selectors.getKt1304Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1304Error() should return the current "error" state', () => {
      const result = Kt1304Selectors.getKt1304Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
