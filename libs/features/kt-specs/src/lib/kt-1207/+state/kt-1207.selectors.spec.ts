import { Kt1207Entity } from './kt-1207.models';
import { kt1207Adapter, Kt1207PartialState, initialState } from './kt-1207.reducer';
import * as Kt1207Selectors from './kt-1207.selectors';

describe('Kt1207 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1207Id = (it: Kt1207Entity) => it.id;
  const createKt1207Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1207Entity);

  let state: Kt1207PartialState;

  beforeEach(() => {
    state = {
      kt1207: kt1207Adapter.setAll(
        [createKt1207Entity('PRODUCT-AAA'), createKt1207Entity('PRODUCT-BBB'), createKt1207Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1207 Selectors', () => {
    it('getAllKt1207() should return the list of Kt1207', () => {
      const results = Kt1207Selectors.getAllKt1207(state);
      const selId = getKt1207Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1207Selectors.getSelected(state) as Kt1207Entity;
      const selId = getKt1207Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1207Loaded() should return the current "loaded" status', () => {
      const result = Kt1207Selectors.getKt1207Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1207Error() should return the current "error" state', () => {
      const result = Kt1207Selectors.getKt1207Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
