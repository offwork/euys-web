import { HSM1MpcOzellik, HSM1UretimDegerleri } from '@euys/api-interfaces';

export function getHsm1MpcOzellikRowData(
  ozellik: HSM1MpcOzellik,
  uretimDegerleri: HSM1UretimDegerleri[]
) {
  return uretimDegerleri
    ? uretimDegerleri.find(({ mpcOzellik }) => mpcOzellik === ozellik)
    : null;
}

export function getHsm1MpcOlculenOrtalama(
  ozellik: HSM1MpcOzellik,
  uretimDegerleri: HSM1UretimDegerleri[]
): number {
  const rowData = getHsm1MpcOzellikRowData(ozellik, uretimDegerleri);
  return rowData ? rowData.olculenOrtalama : null;
}

export function getHsm1MpcOlculenMin(
  ozellik: HSM1MpcOzellik,
  uretimDegerleri: HSM1UretimDegerleri[]
): number {
  const rowData = getHsm1MpcOzellikRowData(ozellik, uretimDegerleri);
  return rowData ? rowData.olculenMin : null;
}

export function getHsm1MpcOlculenMax(
  ozellik: HSM1MpcOzellik,
  uretimDegerleri: HSM1UretimDegerleri[]
): number {
  const rowData = getHsm1MpcOzellikRowData(ozellik, uretimDegerleri);
  return rowData ? rowData.olculenMax : null;
}
