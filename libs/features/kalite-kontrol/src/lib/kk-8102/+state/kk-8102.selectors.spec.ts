import { Kk8102Entity } from './kk-8102.models';
import {
  kk8102Adapter,
  Kk8102PartialState,
  initialState,
} from './kk-8102.reducer';
import * as Kk8102Selectors from './kk-8102.selectors';

describe('Kk8102 Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKk8102Id = (it: Kk8102Entity) => it.id;
  const createKk8102Entity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as Kk8102Entity);

  let state: Kk8102PartialState;

  beforeEach(() => {
    state = {
      kk8102: kk8102Adapter.setAll(
        [
          createKk8102Entity('PRODUCT-AAA'),
          createKk8102Entity('PRODUCT-BBB'),
          createKk8102Entity('PRODUCT-CCC'),
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

  describe('Kk8102 Selectors', () => {
    it('getAllKk8102() should return the list of Kk8102', () => {
      const results = Kk8102Selectors.getAllKk8102(state);
      const selId = getKk8102Id(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Kk8102Selectors.getSelected(state) as Kk8102Entity;
      const selId = getKk8102Id(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getKk8102Loaded() should return the current "loaded" status', () => {
      const result = Kk8102Selectors.getKk8102Loaded(state);

      expect(result).toBe(true);
    });

    it('getKk8102Error() should return the current "error" state', () => {
      const result = Kk8102Selectors.getKk8102Error(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
