import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() authorName: string = '';
  @Input() authorAvatar: string = '';
  @Input() postTime: Date = new Date();
  @Input() postText: string = '';

  likePost() {
    // Implement like functionality
  }

  commentPost() {
    // Implement comment functionality
  }

  sharePost() {
    // Implement share functionality
  }
}
