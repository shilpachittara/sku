import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    it: any[];
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( it => {
        if(items["skuCode"]){
            return it["skuCode"].toLowerCase().includes(searchText.toLowerCase());
        }
        if(it["subname"]){
            return it["subname"].toLowerCase().includes(searchText.toLowerCase());
        }
        if(it["mail"]){
            return it["mail"].toLowerCase().includes(searchText.toLowerCase());
        }
        if(it["name"]){
            return it["name"].toLowerCase().includes(searchText.toLowerCase());
        }
    });
   }
  }