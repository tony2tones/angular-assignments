import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "titleCase"
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(" ");
    for (var i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPrepersition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.formate(word);
      }
    }
    return words.join(" ");
  }

  private isPrepersition(word: string): boolean {
    let prep = ["of", "the"];
    return prep.includes(word.toLowerCase());
  }

  private formate(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
