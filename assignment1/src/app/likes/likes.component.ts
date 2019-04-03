import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "likes",
  templateUrl: "./likes.component.html",
  styleUrls: ["./likes.component.css"]
})
export class LikesComponent {
  @Input('isActive') isLiked: boolean;
  @Input() likesCount: number;
  
  tweet = {
    body: 'Some tweet body bod',
    isLiked: false,
    likesCount: 0
  }

  onClick() {
    this.isLiked = !this.isLiked;
  }
}
