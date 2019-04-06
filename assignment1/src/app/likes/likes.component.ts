import { Component, Input } from "@angular/core";
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';

@Component({
  selector: "likes",
  templateUrl: "./likes.component.html",
  styleUrls: ["./likes.component.css"]
})
export class LikesComponent {
  @Input('isActive') isLiked: boolean;
  @Input() likesCount: number;

  yesClick() {
    console.log('You clicked yes');
    this.isLiked = true;
    this.likesCount = this.likesCount + 1;
  }

  noClick() {
    console.log('You clicked no');
    this.isLiked = false;
    this.likesCount = this.likesCount - 1;
  }

  toggleClick(){
    console.log('you clicked the heart');
    this.isLiked = !this.isLiked;
    
  }
}
