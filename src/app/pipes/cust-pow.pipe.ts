import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custPow'
})
export class CustPowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
