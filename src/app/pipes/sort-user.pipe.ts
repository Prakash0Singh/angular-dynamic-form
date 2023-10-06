import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortUser'
})
export class SortUserPipe implements PipeTransform {

  transform(value: any, args:string): any {
    const argument=args
    if (argument=='az') {
      return (value.sort((a:any,b:any)=>{
        if (a.firstName<b.firstName) {
          return -1
        }
        else{
          return 1
        }
      })) 
    }
    else{
      return (value.sort((a:any,b:any)=>{
        if (a.firstName>b.firstName) {
          return -1
        }
        else{
          return 1
        }
      }))
    }
  }

}
