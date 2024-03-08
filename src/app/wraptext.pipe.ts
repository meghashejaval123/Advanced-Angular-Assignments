import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wraptext'
})
export class WrapTextPipe implements PipeTransform {
  transform(text: string, maxWords: number): string {
    // Split the text into an array of words
    const words = text.split(' ');

    // If the number of words is less than or equal to the specified limit, return the original text
    if (words.length <= maxWords) {
      return text;
    }

    // Otherwise, take only the first 'maxWords' words and add an ellipsis (...) at the end
    const truncatedText = words.slice(0, maxWords).join(' ') + '...';
    return truncatedText;
  }
}
