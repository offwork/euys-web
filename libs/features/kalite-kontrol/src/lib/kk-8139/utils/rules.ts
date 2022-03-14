import {
  QCKayitBilgileri,
  EvetHayir,
  HSM1UretimDegerleri,
} from '@euys/api-interfaces';
import {
  OrtalamaKalGenIkaz,
  OrtalamaSicaklikIkaz,
  OrtSicaklikValidationParams,
} from '../models/hsm1-ikaz';

export function isDispozeBobin(dispozeKodu: string) {
  return /10[0-2]/.test(dispozeKodu);
}

export function yuzeyKusuruVarMi(
  qcKayitBilgileri: QCKayitBilgileri
): EvetHayir {
  return isDispozeBobin(qcKayitBilgileri.dispozeKodu)
    ? EvetHayir.EVET
    : EvetHayir.HAYIR;
}

// * Shared e alınacak
export function disableYuzeyKusuruVarMi(qcKayitBilgileri: QCKayitBilgileri) {
  return isDispozeBobin(qcKayitBilgileri.dispozeKodu);
}

// * Shared e alınacak
export function defaultYuzeyKusurKodu(qcKayitBilgileri: QCKayitBilgileri) {
  if (isDispozeBobin(qcKayitBilgileri.dispozeKodu)) {
    return qcKayitBilgileri.dispozeKodu;
  }
  return null;
}

// * Shared e alınacak
export function getMinDerece(dispozeMi: boolean) {
  return dispozeMi ? 5 : 1;
}

export function getOlculenOrtalamaIkaz(uretimDegerleri: HSM1UretimDegerleri) {
  if (
    uretimDegerleri.mpcOzellik === 'KALINLIK' ||
    uretimDegerleri.mpcOzellik === 'GENISLIK'
  )
    return getOrtalamaKalGenIkaz(uretimDegerleri);
  else if (
    uretimDegerleri.mpcOzellik === 'SHIKMALSICAKLIGI' ||
    uretimDegerleri.mpcOzellik === 'SHSARILMASICAKLIGI'
  )
    return getOrtalamaSicaklikIkaz(uretimDegerleri);
}

// * Shared e alınacak
function getOrtalamaKalGenIkaz({
  mpcMin,
  mpcMax,
  olculenOrtalama,
  toleransDisiMin,
  toleransDisiMax,
}: OrtalamaKalGenIkaz) {
  const [minIkaz, maxIkaz] = [
    mpcMin != null ? olculenOrtalama < mpcMin && toleransDisiMin > 0.15 : false,
    mpcMax != null ? olculenOrtalama > mpcMax && toleransDisiMax > 0.15 : false,
  ];

  return maxIkaz || minIkaz;
}

function getOrtalamaSicaklikIkaz({
  l3Min,
  l3Max,
  mpcHedef,
  olculenOrtalama,
}: OrtalamaSicaklikIkaz) {
  return checkOrtalamaSicaklikIkazParams({
    l3Min,
    l3Max,
    mpcHedef,
    olculenOrtalama,
  })
    ? isOrtalamaSicaklikValid({
        mpcHedef,
        olculenOrtalama,
      })
    : false;
}

const checkOrtalamaSicaklikIkazParams = ({
  l3Min,
  l3Max,
  mpcHedef,
  olculenOrtalama,
}: OrtalamaSicaklikIkaz) =>
  olculenOrtalama != null && mpcHedef != null && l3Min != null && l3Max != null;

const isOrtalamaSicaklikValid = ({
  mpcHedef,
  olculenOrtalama,
}: OrtSicaklikValidationParams) =>
  olculenOrtalama < mpcHedef + 20 && olculenOrtalama > mpcHedef - 20
    ? false
    : true;

export function updateUretimDegerleri(
  uretimDegerleriList: HSM1UretimDegerleri[],
  uretimDegerleri: HSM1UretimDegerleri
) {
  const { mpcOzellik } = uretimDegerleri;
  const index = uretimDegerleriList.findIndex(
    deger => deger.mpcOzellik === mpcOzellik
  );
  return [
    ...uretimDegerleriList.filter((_, i) => i < index),
    {
      ...uretimDegerleri,
      olculenOrtalamaIkaz: getOlculenOrtalamaIkaz(uretimDegerleri),
    },
    ...uretimDegerleriList.filter((_, i) => i > index),
  ];
}
