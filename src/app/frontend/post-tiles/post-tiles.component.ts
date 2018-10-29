import { Component, OnInit } from '@angular/core';
import { PostModel } from 'projects/thejsblogadmin/src/app/admin-portal/posts/post.model';
import { Observable } from 'rxjs';
import { RowsResponse, HandledErrorResponse } from 'projects/thejsblogadmin/src/app/admin-portal/core/response.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'b-post-tiles',
  templateUrl: './post-tiles.component.html',
  styleUrls: ['./post-tiles.component.scss']
})
export class PostTilesComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  posts: PostModel[];
  ngOnInit() {
    this.postsService.getLatestPosts().subscribe((res: RowsResponse<PostModel>) => {
      this.posts = res.rows;
      console.log(this.posts);
    });
  }

}
