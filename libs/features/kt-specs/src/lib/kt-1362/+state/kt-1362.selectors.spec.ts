import { Kt1362Entity } from './kt-1362.models';
import {
  kt1362Adapter,
  Kt1362PartialState,
  initialState,
} from './kt-1362.reducer';
import * as Kt1362Selectors from './kt-1362.selectors';

describe('Kt1362 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1362Id = (it: Kt1362Entity) => it.id;
  const createKt1362Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1362Entity);

  let state: Kt1362PartialState;

  beforeEach(() => {
    state = {
      kt1362: kt1362Adapter.setAll(
        [
          createKt1362Entity('PRODUCT-AAA'),
          createKt1362Entity('PRODUCT-BBB'),
          createKt1362Entity('PRODUCT-CCC'),
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

  describe('Kt1362 Selectors', () => {
    it('getAllKt1362() should return the list of Kt1362', () => {
      const results = Kt1362Selectors.getAllKt1362(state);
      const selId = getKt1362Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1362Selectors.getSelected(state) as Kt1362Entity;
      const selId = getKt1362Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1362Loaded() should return the current "loaded" status', () => {
      const result = Kt1362Selectors.getKt1362Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1362Error() should return the current "error" state', () => {
      const result = Kt1362Selectors.getKt1362Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
