import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortSilderPipe'
})
export class SortSilderPipePipe implements PipeTransform {

  transform(items: any[],): any[] {
    if (!items) {
      return [];
    }
    
    const sortedItems = items.sort((itemA, itemB) => {
      return itemA.order-itemB.order;
    })
    
    return sortedItems
  }

}
