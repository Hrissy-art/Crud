import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clone',
  standalone: true
})
export class ClonePipe implements PipeTransform {

  transform(object: any, ...args: unknown[]): any {
    return structuredClone(object);
  }

}