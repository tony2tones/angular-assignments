import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  tweet = {
    body: 'Some tweet body bod',
    isLiked: false,
    likesCount: 0
  }
}
