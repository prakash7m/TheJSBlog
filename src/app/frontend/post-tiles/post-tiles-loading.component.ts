import { Component, OnInit } from '@angular/core';
import { PostModel } from 'projects/thejsblogadmin/src/app/admin-portal/posts/post.model';
import { Observable } from 'rxjs';
import { RowsResponse, HandledErrorResponse } from 'projects/thejsblogadmin/src/app/admin-portal/core/response.model';
import { PostsService } from '../posts.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'b-post-tiles-loading',
  template: `
    <div class="row">
      <div *ngFor="let i of items" class="post col-lg-4 col-sm-6">
        <div class="post-thumbnail">
          <a style="width: 100%; height: 200px; margin-bottom: 0px; display: inline-block" class="linear-background">
          &nbsp;
          </a>
        </div>
        <div class="post-details">
          <div class="post-meta d-flex justify-content-between">
          <div class="date linear-background" style="width: 50%; height: 8px; margin-bottom: 20px">&nbsp;</div>
          <div class="category"><a href="#"></a></div>
          </div><a>
          <h3 class="linear-background" style="width: 80%; height: 20px; margin-bottom: 20px">&nbsp;</h3></a>
          <p class="text-muted linear-background" style="width: 90%; height: 5px; margin-bottom: 5px;"></p>
          <p class="text-muted linear-background" style="width: 60%; height: 5px; margin-bottom: 5px;"></p>
          <p class="text-muted linear-background" style="width: 50%; height: 5px; margin-bottom: 5px;"></p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../loading/loading.component.css']
})
export class PostTilesLoadingComponent extends LoadingComponent {
  items = [1, 2, 3];
 }
