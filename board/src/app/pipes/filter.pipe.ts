import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchCriterion: string): any[] {
    return searchCriterion
      ? value.filter((task: { title: string }) => task.title.startsWith(searchCriterion))
      : value;
  }

}
