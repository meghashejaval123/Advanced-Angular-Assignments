import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraptext'
})
export class WrapTextPipe implements PipeTransform {
  transform(text: string, maxWords: number): string {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    }
    const truncatedText = words.slice(0, maxWords).join(' ') + '...';
    return truncatedText;
  }
}
