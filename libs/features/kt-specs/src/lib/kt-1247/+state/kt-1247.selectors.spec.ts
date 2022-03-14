import { Kt1247Entity } from './kt-1247.models';
import { kt1247Adapter, Kt1247PartialState, initialState } from './kt-1247.reducer';
import * as Kt1247Selectors from './kt-1247.selectors';

describe('Kt1247 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKt1247Id = (it: Kt1247Entity) => it.id;
  const createKt1247Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kt1247Entity);

  let state: Kt1247PartialState;

  beforeEach(() => {
    state = {
      kt1247: kt1247Adapter.setAll(
        [createKt1247Entity('PRODUCT-AAA'), createKt1247Entity('PRODUCT-BBB'), createKt1247Entity('PRODUCT-CCC')],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kt1247 Selectors', () => {
    it('getAllKt1247() should return the list of Kt1247', () => {
      const results = Kt1247Selectors.getAllKt1247(state);
      const selId = getKt1247Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kt1247Selectors.getSelected(state) as Kt1247Entity;
      const selId = getKt1247Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKt1247Loaded() should return the current "loaded" status', () => {
      const result = Kt1247Selectors.getKt1247Loaded(state);

      expect(result).toBe(true);
    });

    it('getKt1247Error() should return the current "error" state', () => {
      const result = Kt1247Selectors.getKt1247Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
