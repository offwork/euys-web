import {
  QCKayitBilgileri,
  EvetHayir,
  HSM2UretimDegerleri,
} from '@euys/api-interfaces';

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

export function disableYuzeyKusuruVarMi(qcKayitBilgileri: QCKayitBilgileri) {
  return isDispozeBobin(qcKayitBilgileri.dispozeKodu);
}

export function defaultYuzeyKusurKodu(qcKayitBilgileri: QCKayitBilgileri) {
  if (isDispozeBobin(qcKayitBilgileri.dispozeKodu)) {
    return qcKayitBilgileri.dispozeKodu;
  }
  const sarilmaSicakligiHatali =
    sarilmaSicakligiHataliControl1(qcKayitBilgileri) ||
    sarilmaSicakligiHataliControl2(qcKayitBilgileri) ||
    sarilmaSicakligiHataliControl3(qcKayitBilgileri);
  return sarilmaSicakligiHatali ? '322' : null;
}

function sarilmaSicakligiHataliControl1(qcKayitBilgileri: QCKayitBilgileri) {
  return (
    ['7658K', '7659K', '7660K', '7661K'].includes(
      qcKayitBilgileri.dokumCelikKalitesi
    ) &&
    qcKayitBilgileri.hsm2UretimDegerleri.find(
      ({ mpcOzellik }) => mpcOzellik === 'SHSARILMASICAKLIGI'
    )?.l3Ortalama < 570
  );
}

function sarilmaSicakligiHataliControl2(qcKayitBilgileri: QCKayitBilgileri) {
  return (
    ['1124K', '1130K', '1526K', '1527K', '1528K'].includes(
      qcKayitBilgileri.dokumCelikKalitesi
    ) &&
    qcKayitBilgileri.hsm2UretimDegerleri.find(
      ({ mpcOzellik }) => mpcOzellik === 'SHSARILMASICAKLIGI'
    )?.l3Ortalama < 690
  );
}

function sarilmaSicakligiHataliControl3(qcKayitBilgileri: QCKayitBilgileri) {
  return (
    ['7512', '7513', '7614', '7516', '0513'].includes(
      qcKayitBilgileri.dokumCelikKalitesi
    ) &&
    qcKayitBilgileri.hsm2UretimDegerleri.find(
      ({ mpcOzellik }) => mpcOzellik === 'SHSARILMASICAKLIGI'
    )?.l3Ortalama < 680
  );
}

export function getMinDerece(dispozeMi: boolean) {
  return dispozeMi ? 5 : 1;
}

export function getOlculenOrtalamaIkaz(uretimDegerleri: HSM2UretimDegerleri) {
  const { mpcMin, mpcMax, olculenOrtalama } = uretimDegerleri;
  const [minIkaz, maxIkaz] = [
    mpcMin !== null && mpcMin !== undefined ? olculenOrtalama < mpcMin : false,
    mpcMax !== null && mpcMax !== undefined ? olculenOrtalama > mpcMax : false,
  ];

  return maxIkaz || minIkaz;
}

export function updateUretimDegerleri(
  uretimDegerleriList: HSM2UretimDegerleri[],
  uretimDegerleri: HSM2UretimDegerleri
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
