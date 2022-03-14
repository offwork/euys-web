import { Kt1302Entity } from './kt-1302.models';
import {
  kt1302Adapter,
  Kt1302PartialState,
  initialState,
} from './kt-1302.reducer';
import * as Kt1302Selectors from './kt-1302.selectors';

describe('Kt1302 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1302Id = (it: Kt1302Entity) => it.id;
  const createKt1302Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1302Entity);

  let state: Kt1302PartialState;

  beforeEach(() => {
    state = {
      kt1302: kt1302Adapter.setAll(
        [
          createKt1302Entity('PRODUCT-AAA'),
          createKt1302Entity('PRODUCT-BBB'),
          createKt1302Entity('PRODUCT-CCC'),
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

  describe('Kt1302 Selectors', () => {
    it('getAllKt1302() should return the list of Kt1302', () => {
      const results = Kt1302Selectors.getAllKt1302(state);
      const selId = getKt1302Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1302Selectors.getSelected(state) as Kt1302Entity;
      const selId = getKt1302Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1302Loaded() should return the current "loaded" status', () => {
      const result = Kt1302Selectors.getKt1302Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1302Error() should return the current "error" state', () => {
      const result = Kt1302Selectors.getKt1302Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
