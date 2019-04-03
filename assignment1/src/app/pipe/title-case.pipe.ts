import { Pipe, PipeTransform } from "@angular/core";
import { prepareSyntheticListenerFunctionName } from "@angular/compiler/src/render3/util";

@Pipe({
  name: "titleCase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(" ");
    for (var i = 0; i < words.length; i++) {
      if (i > 0 && this.isPrepersition(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.formatWords(words[i]);
      }
    }
    return words.join(" ");
  }
  private isPrepersition(word: string): boolean {
    let prepersitions = ["of", "the"];
    return prepersitions.includes(word.toLowerCase());
  }

  private formatWords(word:string) {
    return (word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase());
  }
}
