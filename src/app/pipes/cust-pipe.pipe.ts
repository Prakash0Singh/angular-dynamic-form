import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPipe'
})
export class CustPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const[x]=args
    return value*x;
  }

}
