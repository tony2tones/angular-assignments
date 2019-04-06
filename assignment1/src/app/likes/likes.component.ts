import { Component, Input } from "@angular/core";

@Component({
  selector: "likes",
  templateUrl: "./likes.component.html",
  styleUrls: ["./likes.component.css"]
})
export class LikesComponent {
  @Input('isActive') isLiked: boolean;
  @Input() likesCount: number;

  onClick() {
    console.log('this has been clicked');
    this.isLiked = !this.isLiked;
  }
}
