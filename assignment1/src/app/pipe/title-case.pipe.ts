import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titleCase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let prepersitions = [
      'of',
      'a'
    ];

    let words = value.split(' ');
    for(var i = 0; i < words.length; i++){
      if(prepersitions.includes(words[i])){
        words[i].toLocaleLowerCase();
      }
      else { words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLocaleLowerCase(); 
      }
    }
  }
}
