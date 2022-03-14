# Filter Bar

Filter Bar Modülü listeleme görünümleri için basit filtreleme sağlar.

## Input'lar

---

> - `@Input() filterForm <- ` filtreleme görünümünü oluştutracak bileşenleri temsil eden form şemasıdır.
> - `@Input() productLines <- ` filtreleme için kullanılacak olan hatlar select'i doldurur.
> - `@Input() isRecord <- ` kaydet düğmesinin filtrelemede kullanılıp kullanılmamasına karar verir.

<br>

## Output'lar

---

> - `@Output() startSearching -> ` Üst bileşni için `{year: 2021, previousYear: true}` benzeri bir olay nesnesi döndürür.

<br>

## Basit Kullanımı

---

- Filter Bar, filterForm FormGroup'u nesnesi içindeki her bir FormControl'ü için bir filtreme öğesi yaratacaktır:\
  ```
  filterForm = new FormGroup<FilterFormSchema>({
    year: new FormControl<Date>(new Date()),
    month: new FormControl<Date>(new Date()),
  });
  ```
- Yukarıdaki FormGroup nesnesi FilterFormSchema nesnesinin öğelerince belirlendiği değişken ve tiplerle sınırlıdır.
- productLines, bir Observable dizi olarak üst bileşenden geçilmeilidir, bu filtrelemede kullanılcak olan hatlar listesinin görünümünü oluşturur:\
  ```
  @Component({
    ...
  })
  export class UstBilesen {
      productLines$: Observable<Array<Line>>;
      ...
  ```

<br>

### Tüm özellikler

---

```
<euys-filter-bar
  [filterForm]="filterForm"
  [isRecord]="true"
  [productLines]="productLines$"
  (startSearching)="clickOnContinue($event)">
  <!-- Gerekli ise kullan -->
  <button type="button" color="accent" [disabled]="saveDisable" (click)="clickOnSave()" mat-raised-button>Kaydet</button>

</euys-filter-bar>
```
