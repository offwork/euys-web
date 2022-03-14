import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euysReplaceWhitespace',
})
export class ReplaceWhitespacePipe implements PipeTransform {
  transform(value: string, replaceStr = '_'): string {
    return value
      .toLocaleLowerCase('tr-TR')
      .replace(/\s/g, replaceStr)
      .replace(/ı/g, 'i')
      .replace(/ü/g, 'u')
      .replace(/ğ/g, 'g')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/ş/g, 's');
  }
}
