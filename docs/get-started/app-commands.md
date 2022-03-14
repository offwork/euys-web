# Uygulama Komutlarını Çalıştırma
Nx ile aynı çalışma alanında birden çok uygulama ve kütüphane oluşturabilirsiniz. Aslından buların her biri çalışma alanınızın kök klasörü altında yer alan nx.json ve angular.json dosyalarında birer proje olarak tanımlanır. Bu şekilde bir tanımlama Angular ve NX CLI'nın hangi projeyi nasıl çalıştırmak istediğize yardımcı olmayı kolaylaştırır.

## Development server

Bir geliştirme sunucusu için `ng serve my-app` komutunu çalıştırın. http://localhost:4200/ adresine gidin. Kaynak dosyalardan herhangi birini değiştirirseniz uygulama otomatik olarak yeniden yüklenir.

## Üretim(Nihai Kod)

Projeyi oluşturmak için `ng build my-app` komutunu çalıştırın. Derleme yapıları `dist/` dizininde saklanacaktır. Bir üretim yapısı için `--prod` bayrağını kullanın.

## Birim tesleri çalıştırma

[Jest](https://jestjs.io) aracılığıyla birim testlerini yürütmek için `ng test my-app` komutunu çalıştırın.

Bir değişiklikten etkilenmiş olan birim tesleri yürütmek için `nx affected:test` komutunu çalıştırın.

## Uçtan uça testleri çalıştırma

[Cypress](https://www.cypress.io) aracılığıyla uçtan uca testleri yürütmek için `ng e2e my-app` komutunu çalıştırın.

Bir değişiklikten etkilenen uçtan uca testleri yürütmek için `nx affected:e2e` komutunu çalıştırın.

## Çalışma alanınızı anlama

Projelerinizin bağımlılıklarını bir diyagram halinde görmek için `nx dep-graph`'ı çalıştırın. 
