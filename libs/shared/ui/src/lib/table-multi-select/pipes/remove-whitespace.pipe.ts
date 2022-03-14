import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euysRemoveWhitespace',
})
export class RemoveWhitespacePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLocaleLowerCase('tr-TR')
      .replace(/\s/g, '')
      .replace(/ı/g, 'i')
      .replace(/ü/g, 'u')
      .replace(/ğ/g, 'g')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/ş/g, 's');
  }
}
