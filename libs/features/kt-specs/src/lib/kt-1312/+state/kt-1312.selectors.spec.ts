import { Kt1312Entity } from './kt-1312.models';
import {
  kt1312Adapter,
  Kt1312PartialState,
  initialState,
} from './kt-1312.reducer';
import * as Kt1312Selectors from './kt-1312.selectors';

describe('Kt1312 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1312Id = (it: Kt1312Entity) => it.id;
  const createKt1312Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1312Entity);

  let state: Kt1312PartialState;

  beforeEach(() => {
    state = {
      kt1312: kt1312Adapter.setAll(
        [
          createKt1312Entity('PRODUCT-AAA'),
          createKt1312Entity('PRODUCT-BBB'),
          createKt1312Entity('PRODUCT-CCC'),
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

  describe('Kt1312 Selectors', () => {
    it('getAllKt1312() should return the list of Kt1312', () => {
      const results = Kt1312Selectors.getAllKt1312(state);
      const selId = getKt1312Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1312Selectors.getSelected(state) as Kt1312Entity;
      const selId = getKt1312Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1312Loaded() should return the current "loaded" status', () => {
      const result = Kt1312Selectors.getKt1312Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1312Error() should return the current "error" state', () => {
      const result = Kt1312Selectors.getKt1312Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
