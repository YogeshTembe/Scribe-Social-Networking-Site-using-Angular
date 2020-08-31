import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let gender=args;
    
    if(gender==['male'])
    {
      return "Mr."+value;
    }
  
    else{
        return "Mrs."+value;
    }
  }

}
