import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent  {
  tweet = {
    body: 'Some tweet body bod',
    isLiked: false,
    likesCount: 0
  }

}
