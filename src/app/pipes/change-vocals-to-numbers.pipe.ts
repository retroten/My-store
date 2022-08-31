import { WrappedNodeExpr } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { pipe } from 'rxjs';

@Pipe({
  name: 'changeVocalsToNumbers'
})
export class ChangeVocalsToNumbersPipe implements PipeTransform {

  transform(value: any): any {
    let word: any[] = value.split('');
    let newWord: any[] = [];

    for (let e in word) {

      if(word[e] == 'a'){
        word[e]= '4' ;
      }
      else if (word[e]=='e'){
        word[e] = '3';
      }
      else if (word[e] == 'i'){
        word[e] = '1';
      }
      else if (word[e]=='o'){
        word[e]='0';
      }
      else if (word[e]=='u'){
        word[e]='6'
      }
      //   newWord[e].push('4');
      // }
      // else if (e = 'e') {
        
      //   newWord[e].push('3');
      // }
      // else if (e = 'i') {
  
      //   newWord[e].push('1');
      // }
      // else if (e = 'o') {
      
      //   newWord[e].push('0');
      // }
      // else if (e = 'u') {
    
      //   newWord[e].push('6');
      // }

      // newWord[e].push(e);
      
      // return newWord;
    }
   
  return word
}

}
