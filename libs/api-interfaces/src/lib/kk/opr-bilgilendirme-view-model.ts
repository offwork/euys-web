import { GnDokuman } from './gn-dokuman';
import { KkOperatorBilgiGörseller } from './kk-operator-bilgi-gorseller';
import { KkOperatorBilgilendirme } from './kk-operator-bilgilendirme';

export interface OprBilgilendirmeViewModel {
  kkOperatorBilgilendirme: KkOperatorBilgilendirme;
  kkOperatorBilgiGorselList?: KkOperatorBilgiGörseller[];
  gnDokumanList?: GnDokuman[];
  imageList?: ImageBitmap[]; // resim listesi hangi modelde taşınacaksa değişecek
}
