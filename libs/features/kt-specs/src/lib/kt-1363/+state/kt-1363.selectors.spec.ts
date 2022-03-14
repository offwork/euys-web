import { Kt1363Entity } from './kt-1363.models';
import {
  kt1363Adapter,
  Kt1363PartialState,
  initialState,
} from './kt-1363.reducer';
import * as Kt1363Selectors from './kt-1363.selectors';

describe('Kt1363 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1363Id = (it: Kt1363Entity) => it.id;
  const createKt1363Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1363Entity);

  let state: Kt1363PartialState;

  beforeEach(() => {
    state = {
      kt1363: kt1363Adapter.setAll(
        [
          createKt1363Entity('PRODUCT-AAA'),
          createKt1363Entity('PRODUCT-BBB'),
          createKt1363Entity('PRODUCT-CCC'),
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

  describe('Kt1363 Selectors', () => {
    it('getAllKt1363() should return the list of Kt1363', () => {
      const results = Kt1363Selectors.getAllKt1363(state);
      const selId = getKt1363Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1363Selectors.getSelected(state) as Kt1363Entity;
      const selId = getKt1363Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1363Loaded() should return the current "loaded" status', () => {
      const result = Kt1363Selectors.getKt1363Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1363Error() should return the current "error" state', () => {
      const result = Kt1363Selectors.getKt1363Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
