# EUYS – Dynamic From

Dynamic Form Modülü, ilgili ekranlardaki koleksiyonların üzerinde yenilemler yapmayı amaçlayan kullanıcı form görünümlerini oluşturmak için kullanılır.

---
<br>

## @Input'lar
> - `@Input() formControls <--` form alanlarının oluşturduğu form nesnesinin şemasını temsil eder.
> - `@Input() update <--` koleksiyondaki bir öğenin güncellenmesini ya da yeni bir tanesinin eklenmesini belirler.
> - `@Input() selectedRow <--` koleksiyondan seçillen öğenin güncellenmesini sağlar.

---

<br>

## @Output'lar
> - `@Output() dispatchFormValue --> ` form nesnesnin değerlerini bir üst bileşene iletilmesini gerçekleştirir.

---

<br>

## Genel Bakış
- **formControls**, `DynamicFormControl` nesnesi örneğinin biz dizisidir ve bir üst bileşendeki tanımı aşağıdaki gibi olmalıdır:
  ```
  formControls: Array<DynamicFormControl> = [
    { id: 0, label: 'Hedef Giriş Sıcaklığı (C):', controlName: 'hedefGirisSicakligi' },
    ...
    {
      id: 5,
      label: 'Test Listesi Sıcaklığı (C):',
      controlName: 'list',
      type: 'array',
      options: observableOf([
        { id: '001', ikmalSicaklikAd: 'ikmal sicaklik 001', temp: 0.67, olusturanKisi: '999999' },
        { id: '002', ikmalSicaklikAd: 'ikmal sicaklik 002', temp: 0.75, olusturanKisi: '999999' },
      ]),
      porps: ['ikmalSicaklikAd', 'temp'],
    },
  ];
  ```
  Yukaridaki **formControls** değişkeni tanımındaki sırasıyla:
    * `id`, her bir DynamicFormControl öğesinin dizideki indisi için kullanılır.
    * `label`, form alanının görüntülenecek ismini temsil eder.
    * `controlName`, form grubu içerisindeki FormControl nesnesinin temsilidir.
    * `type`, form input'larının tipinin belirlenmesine yardımcı olur.
    * `options`, Combobox veya Dropdown araçlarının liste görünümlerinin bağlandığı dizi ya da stream (Observable türü) nesneleridir.
    * `props` Dropdown veya Combobox listesinde görüntülenecek anahtar değer çiftini belirleyen bir dize dizisidir. Dizin ilk indisi görüntülenecek etiket, ikincisi ise değer için kullanılır.

    <br>

- **template** kullanımı aşağıdaki gibidir:
  ```
  <euys-dynamic-form 
    [selectedRow]="selectedRow$"
    [formControls]="formControls"
    [update]="isUpdate()"
    (dispatchFormValue)="onSubmit($event)">
    <!-- FORM Tablo Kodu -->
  </euys-dynamic-form>
  ```
  Yukaridaki HTML şablonunda `[selectedRow]` input'nun Observable tipinde olduğunu unutmayın. Ayrıca `formControls` koleksiyonu içerisindeki **options** tipi hem Observable hem de Array tipinde olabileceğini de gözden kaçırmayın.