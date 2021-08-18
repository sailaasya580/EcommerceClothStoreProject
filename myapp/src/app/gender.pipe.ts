import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(g:string): string {
    let r='Male';
    if(g=='F')
      r='Female';
      return r;
  }

}
