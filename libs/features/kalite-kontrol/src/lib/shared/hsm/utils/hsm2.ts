import { HSM2MpcOzellik, HSM2UretimDegerleri } from '@euys/api-interfaces';

export function getMpcOzellikRowData(
  ozellik: HSM2MpcOzellik,
  uretimDegerleri: HSM2UretimDegerleri[]
) {
  return uretimDegerleri.find(({ mpcOzellik }) => mpcOzellik === ozellik);
}

export function getMpcOlculenOrtalama(
  ozellik: HSM2MpcOzellik,
  uretimDegerleri: HSM2UretimDegerleri[]
): number {
  const rowData = getMpcOzellikRowData(ozellik, uretimDegerleri);
  return rowData?.olculenOrtalama;
}
