import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalErrorHandler } from '../../../../projects/thejsblogadmin/src/app/admin-portal/core/global-error-handler';
import { Observable } from 'rxjs/Observable';
import { RowsResponse,
  HandledErrorResponse, DataResponse } from '../../../../projects/thejsblogadmin/src/app/admin-portal/core/response.model';
import { apiURL } from '../../../../projects/thejsblogadmin/src/app/admin-portal/config';
import { PostModel } from '../../../../projects/thejsblogadmin/src/app/admin-portal/posts/post.model';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostTilesService {
  constructor(private http: HttpClient, private globalErrorHandler: GlobalErrorHandler) { }
  /**
   * Get the list of posts
   *
   * @returns {(Observable<RowsResponse<PostModel> | HandledErrorResponse>)}
   * @memberof PostTilesService
   */
  getLatestPosts(): Observable<RowsResponse<PostModel> | HandledErrorResponse> {
    return this.http.get<RowsResponse<PostModel>>(`${apiURL}/post`, { withCredentials: true }).pipe(
      map((res: RowsResponse<PostModel>) => res))
      .catch((err: any, caught: Observable<RowsResponse<PostModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }

  getPost(slug: string): Observable<DataResponse<PostModel> | HandledErrorResponse> {
    return this.http.get<DataResponse<PostModel>>(`${apiURL}/post/${slug}`, { withCredentials: true }).pipe(
      map((res: DataResponse<PostModel>) => res))
      .catch((err: any, caught: Observable<DataResponse<PostModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }
}
