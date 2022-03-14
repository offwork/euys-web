import { Kt1230Entity } from './kt-1230.models';
import { kt1230Adapter, Kt1230PartialState, initialState } from './kt-1230.reducer';
import * as Kt1230Selectors from './kt-1230.selectors';

describe('Kt1230 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1230Id = (it: Kt1230Entity) => it.id;
  const createKt1230Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1230Entity);

  let state: Kt1230PartialState;

  beforeEach(() => {
    state = {
      kt1230: kt1230Adapter.setAll(
        [createKt1230Entity('PRODUCT-AAA'), createKt1230Entity('PRODUCT-BBB'), createKt1230Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1230 Selectors', () => {
    it('getAllKt1230() should return the list of Kt1230', () => {
      const results = Kt1230Selectors.getAllKt1230(state);
      const selId = getKt1230Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1230Selectors.getSelected(state) as Kt1230Entity;
      const selId = getKt1230Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1230Loaded() should return the current "loaded" status', () => {
      const result = Kt1230Selectors.getKt1230Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1230Error() should return the current "error" state', () => {
      const result = Kt1230Selectors.getKt1230Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
