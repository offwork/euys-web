import {
  QCKayitBilgileri,
  QCOnayModel,
  HSM2UretimDegerleri,
  HSM2MpcOzellik,
  EvetHayir,
} from '@euys/api-interfaces';
import { State } from '../+state/kk-8115.reducer';

export function extractQCOnayModel(kk8115State: State): QCOnayModel {
  const {
    bagimsizNumuneList,
    bobinAcmaKontrol,
    qcKayitBilgileri,
    yuzeyKusuruVarMi,
  } = kk8115State;

  const missingStateFields = [
    bagimsizNumuneList,
    bobinAcmaKontrol,
    qcKayitBilgileri,
    yuzeyKusuruVarMi,
  ].some(value => !value);

  if (missingStateFields) {
    return null;
  }

  const {
    etagUretimKaydiSonucHsm,
    etagUretimKyd,
    etagYariMamul,
    etagYariMamulAktif,
    idUretimKaydiSonucHsm,
    idUretimKyd,
    idYariMamul,
    idYariMamulAktif,
    bobinKalinlikDegerleri,
    bobinNo,
    hsm2UretimDegerleri,
    aciklama,
  } = qcKayitBilgileri;

  return {
    aciklama,
    bagimsizNumuneListesi: bagimsizNumuneList,
    bobinAcmaKontrolu: bobinAcmaKontrol,
    bobinKalinlikDegerleri,
    bobinDisCapiOlculenOrtalama:
      getBobinDisCapOlculenOrtalama(qcKayitBilgileri),
    bobinIcCapiOlculenOrtalama: getBobinIcCapOlculenOrtalama(qcKayitBilgileri),
    bobinNo,
    etagUretimKaydiSonucHsm,
    etagUretimKyd,
    etagYariMamul,
    etagYariMamulAktif,
    genislikOlculenOrtalama: getGenislikOlculenOrtalama(qcKayitBilgileri),
    hatNo: '332',
    hsm1UretimDegerleri: null,
    hsm2UretimDegerleri,
    idUretimKaydiSonucHsm,
    idUretimKyd,
    idYariMamul,
    idYariMamulAktif,
    kalinlikOlculenOrtalama: getKalinlikOlculenOrtalama(qcKayitBilgileri),
    numuneAl: EvetHayir.HAYIR,
    qcKayitTarihi: new Date(),
    // TODO: ESSO'dan alınacak
    qcOperator: 'Bahadır Sezgün',
    seritHaddeIkmalSicaklikOrtalama:
      getSeritHaddeIkmalSicaklikOlculenOrtalama(qcKayitBilgileri),
    seritHaddeSarilmaSicaklikOrtalama:
      getSeritHaddeSarilmaSicaklikOlculenOrtalama(qcKayitBilgileri),
    yuzeyKusurKaydi1: getYuzeyKusurKaydi1(kk8115State),
    yuzeyKusurKaydi2: getYuzeyKusurKaydi2(kk8115State),
    yuzeyKusurKaydi3: getYuzeyKusurKaydi3(kk8115State),
    yuzeyKusuruVarMi,
  };
}

function getBobinDisCapOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(
    qcKayitBilgileri.hsm2UretimDegerleri,
    'BOBINDISCAPI'
  );
}

function getBobinIcCapOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(
    qcKayitBilgileri.hsm2UretimDegerleri,
    'BOBINICCAPI'
  );
}

function getGenislikOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(qcKayitBilgileri.hsm2UretimDegerleri, 'GENISLIK');
}

function getSeritHaddeIkmalSicaklikOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(
    qcKayitBilgileri.hsm2UretimDegerleri,
    'SHIKMALSICAKLIGI'
  );
}

function getSeritHaddeSarilmaSicaklikOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(
    qcKayitBilgileri.hsm2UretimDegerleri,
    'SHSARILMASICAKLIGI'
  );
}

function getKalinlikOlculenOrtalama(
  qcKayitBilgileri: QCKayitBilgileri
): number {
  return getOlculenOrtalama(qcKayitBilgileri.hsm2UretimDegerleri, 'KALINLIK');
}

function getOlculenOrtalama(
  uretimDegerleri: HSM2UretimDegerleri[],
  mpcOzellikAdi: HSM2MpcOzellik
): number {
  return (
    uretimDegerleri.find(({ mpcOzellik }) => mpcOzellik === mpcOzellikAdi)
      ?.olculenOrtalama || null
  );
}

function getYuzeyKusurKaydi1(kk8115State: State) {
  const { yuzeyKusurKaydiList } = kk8115State;
  return yuzeyKusurKaydiList[0] || null;
}

function getYuzeyKusurKaydi2(kk8115State: State) {
  const { yuzeyKusurKaydiList } = kk8115State;
  return yuzeyKusurKaydiList[1] || null;
}

function getYuzeyKusurKaydi3(kk8115State: State) {
  const { yuzeyKusurKaydiList } = kk8115State;
  return yuzeyKusurKaydiList[2] || null;
}
