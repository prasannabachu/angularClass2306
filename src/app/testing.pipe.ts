import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing'
})
export class TestingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
