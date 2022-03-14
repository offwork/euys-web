import * as YillikUretimPlaniSelectors from './yillik-uretim-plani.selectors';
import {YillikUretimPlaniItem} from "./yillik-uretim-plani.models";

describe('YillikUretimPlani Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getYillikUretimPlaniId = (it) => it['id'];
  const createYillikUretimPlaniEntity = (id: string, name = '') =>
    ({
      id,
      unite: name || `name-${id}`,
    } as YillikUretimPlaniItem);

  let state;

  beforeEach(() => {
    state = {
      yillikUretimPlani: {
        data: [
          createYillikUretimPlaniEntity('PRODUCT-AAA'),
          createYillikUretimPlaniEntity('PRODUCT-BBB'),
          createYillikUretimPlaniEntity('PRODUCT-CCC'),
        ]
      },

      error: ERROR_MSG,
      loaded: true,
    }
  });
describe('YillikUretimPlani Selectors', () => {
  it("getYillikUretimPlaniLoaded() should return the current 'loaded' status", () => {
    const result = YillikUretimPlaniSelectors.getYillikUretimPlaniLoaded(state);

    expect(result).toBe(true);
  });

  it("getYillikUretimPlaniError() should return the current 'error' state", () => {
    const result = YillikUretimPlaniSelectors.getYillikUretimPlaniError(state);

    expect(result).toBe(ERROR_MSG);
  });
});
})
;
