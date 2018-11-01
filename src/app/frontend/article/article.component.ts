import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArticleService } from './article.service';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { PostModel } from '../../../../projects/thejsblogadmin/src/app/admin-portal/posts/post.model';
import { DataResponse } from '../../../../projects/thejsblogadmin/src/app/admin-portal/core/response.model';
import { mediaURL } from '../../../../projects/thejsblogadmin/src/app/admin-portal/config';

@Component({
  selector: 'b-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }
  article: PostModel;

  ngOnInit() {
    // this.route.params.subscribe(params => {
      
    // });
    this.postsService.getPost('post/js-functions').then((res: DataResponse<PostModel>) => {
      this.article = res.data;
      window.scrollTo(0, 0);
    });
  }

  getHeroLink(article: PostModel) {
    if (article.hero) {
      return `${mediaURL}/${article.hero.filename}`;
    } else {
      return 'default';
    }
  }
}
