import { Kk8101Entity } from './kk-8101.models';
import {
  kk8101Adapter,
  Kk8101PartialState,
  initialState,
} from './kk-8101.reducer';
import * as Kk8101Selectors from './kk-8101.selectors';

describe('Kk8101 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKk8101Id = (it: Kk8101Entity) => it.id;
  const createKk8101Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kk8101Entity);

  let state: Kk8101PartialState;

  beforeEach(() => {
    state = {
      kk8101: kk8101Adapter.setAll(
        [
          createKk8101Entity('PRODUCT-AAA'),
          createKk8101Entity('PRODUCT-BBB'),
          createKk8101Entity('PRODUCT-CCC'),
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

  describe('Kk8101 Selectors', () => {
    it('getAllKk8101() should return the list of Kk8101', () => {
      const results = Kk8101Selectors.getAllKk8101(state);
      const selId = getKk8101Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kk8101Selectors.getSelected(state) as Kk8101Entity;
      const selId = getKk8101Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKk8101Loaded() should return the current "loaded" status', () => {
      const result = Kk8101Selectors.getKk8101Loaded(state);

      expect(result).toBe(true);
    });

    it('getKk8101Error() should return the current "error" state', () => {
      const result = Kk8101Selectors.getKk8101Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
