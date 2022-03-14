# Angular Yapı Taşları(Temelleri)
Bu sayfa, Angular Çerçecevisini oluşturan bileşen, servis ve modul gibi temel yapı taşlarının çalışma alanınızda hangi komutlar ve nerelerde oluşturulacağını açıklamaya çalışır.

## Module oluşturmak
Yeni bir module oluşturmak için `ng g @nrwl/angular:module my-module --project=my-app` komutunu çalıştırın.

## Component oluşturmak
Yeni bir bileşen oluşturmak için: `ng g @nrwl/angular:component my-component --project=my-app` komutunu çalıştırın.

Belirli bir *module* altında oluşturmak için: `ng g @nrwl/angular:component my-module/my-component --project=my-app --module=my-module`

> Bu şekilde *component* aynı isimli bir dizin içerisinde oluşacaktır.  
> Bu istenmiyorsa **--flat** *flag'i* eklenmeli.

## Service oluşturmak
Yeni bir *service* oluşturmak için `ng g @nrwl/angular:service my-service --project=my-app` komutunu çalıştırın.


## Interface oluşturmak
Yeni bir *interface* oluşturmak için `ng g @nrwl/angular:interface my-interface --project api-interfaces` komutunu çalıştırın.

> Bu komut ile yeni interface dosyası *libs/api-interfaces/src/lib* altında oluşacak.

## NgRx Store oluşturmak
Yeni bir *NgRx Store'u* oluşturmak için `ng g @nrwl/angular:ngrx my-store --module=module-path/my-module.module.ts --facade --root=false` komutunu çalıştırın.