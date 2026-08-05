import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replaceExt' })
export class ReplaceExtPipe implements PipeTransform {
  transform(url: string, newExt: string): string {
    if (!url) return '';
    return url.substring(0, url.lastIndexOf('.')) + newExt;
  }
}
