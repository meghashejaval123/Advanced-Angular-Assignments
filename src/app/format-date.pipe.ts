import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

 
    transform(date: string, formatType: string): string {
      const parsedDate = new Date(date);
  
      if (isNaN(parsedDate.getTime())) {
        // If the date is invalid, return the original date
        return date;
      }
  
      switch (formatType) {
        case 'short-date':
          // Format as "DD MMM YYYY"
          return `${parsedDate.getDate()} ${parsedDate.toLocaleString('en-us', { month: 'short' })} ${parsedDate.getFullYear()}`;
        case 'short-time':
          // Format as "HH:mm"
          return `${parsedDate.getHours()}:${(parsedDate.getMinutes() < 10 ? '0' : '')}${parsedDate.getMinutes()}`;
        default:
          return date;
      }
    }

}
