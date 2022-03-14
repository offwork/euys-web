import { LineSpeedsEntity } from './line-speeds.models';
import { State, lineSpeedsAdapter, initialState } from './line-speeds.reducer';
import * as LineSpeedsSelectors from './line-speeds.selectors';

describe('LineSpeeds Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getLineSpeedsId = (it) => it['id'];
  const createLineSpeedsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as LineSpeedsEntity);

  let state;

  beforeEach(() => {
    state = {
      lineSpeeds: lineSpeedsAdapter.setAll(
        [
          createLineSpeedsEntity('PRODUCT-AAA'),
          createLineSpeedsEntity('PRODUCT-BBB'),
          createLineSpeedsEntity('PRODUCT-CCC'),
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

  describe('LineSpeeds Selectors', () => {
    it('getAllLineSpeeds() should return the list of LineSpeeds', () => {
      const results = LineSpeedsSelectors.getAllLineSpeeds(state);
      const selId = getLineSpeedsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = LineSpeedsSelectors.getSelected(state);
      const selId = getLineSpeedsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLineSpeedsLoaded() should return the current 'loaded' status", () => {
      const result = LineSpeedsSelectors.getLineSpeedsLoaded(state);

      expect(result).toBe(true);
    });

    it("getLineSpeedsError() should return the current 'error' state", () => {
      const result = LineSpeedsSelectors.getLineSpeedsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
