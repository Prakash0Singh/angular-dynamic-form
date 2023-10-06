import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterUser',
  pure:true
})
export class FilterUserPipe implements PipeTransform {

  transform(value:any, args: string): any {
    console.log("Pipe is Called");
    const x=args.trim();
    const loweCse=x.toLowerCase()
    if (!value) {
      return [];
        }
       if (!value || !x) {
        return value;
      }
    
    return value.filter((singleItem:any)=>{
      return singleItem.firstName.toLowerCase().includes(loweCse)
    })
  }

}

// (singleItem =>
// singleItem[field].toLowerCase().includes(value.toLowerCase())
// );