import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArticleService } from './article.service';
import { MarkdownService } from 'ngx-markdown';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { PostModel } from '../../../../projects/thejsblogadmin/src/app/admin-portal/posts/post.model';
import { DataResponse } from '../../../../projects/thejsblogadmin/src/app/admin-portal/core/response.model';
import { mediaURL, webURL } from '../../../../projects/thejsblogadmin/src/app/admin-portal/config';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'b-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postsService: PostsService, private titleService: Title, private metaService: Meta) { }
  article: PostModel;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postsService.getPost(params.slug).subscribe((res: DataResponse<PostModel>) => {
        this.article = res.data;
        this.metaService.addTag({ property: 'og:title', content: this.article.title });
        this.metaService.addTag({ property: 'og:image', content: this.getHeroLink(this.article) });
        this.metaService.addTag({ property: 'og:description', content: this.article.synopsis });
        this.metaService.addTag({ property: 'og:type', content: 'article' });
        this.titleService.setTitle(this.article.title + ' - The JS Blog');
        window.scrollTo(0, 0);
      });
    });
  }

  getHeroLink(article: PostModel) {
    if (article.hero) {
      return `${mediaURL}/${article.hero.filename}`;
    } else {
      return 'default';
    }
  }

  getUrl(article: PostModel) {
    return `${webURL}/post/${article.slug}`;
  }
}
