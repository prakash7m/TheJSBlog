
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

import { RowsResponse, HandledErrorResponse, DataResponse } from '../core/response.model';
import { apiURL } from '../config';
import { SubscriberModel } from './subscriber.model';
import { GlobalErrorHandler } from '../core/global-error-handler';


/**
 * Subscribers service for api operation
 *
 * @export
 */
@Injectable()
export class SubscribersService {
  constructor(private http: HttpClient, private globalErrorHandler: GlobalErrorHandler) { }
  /**
   * Get the list of subscribers
   *
   * @returns {(Observable<RowsResponse<SubscriberModel> | HandledErrorResponse>)}
   * @memberof SubscribersService
   */
  getSubscribers(): Observable<RowsResponse<SubscriberModel> | HandledErrorResponse> {
    return this.http.get<RowsResponse<SubscriberModel>>(`${apiURL}/subscriber`, { withCredentials: true }).pipe(
      map((res: RowsResponse<SubscriberModel>) => res))
      .catch((err: any, caught: Observable<RowsResponse<SubscriberModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }

  /**
   * Add Subscriber
   *
   * @param {string} subscribername
   * @param {string} email
   * @param {string} password
   * @returns {(Observable<DataResponse<SubscriberModel> | HandledErrorResponse>)}
   * @memberof SubscribersService
   */
  addSubscriber(subscriber: SubscriberModel): Observable<DataResponse<SubscriberModel> | HandledErrorResponse> {
    return this.http.post<DataResponse<SubscriberModel>>(`${apiURL}/subscriber`, subscriber, { withCredentials: true }).pipe(
      map((res: DataResponse<SubscriberModel>) => res))
      .catch((err: any, caught: Observable<DataResponse<SubscriberModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }

  /**
   * Delete subscriber by id
   *
   * @param {string} id
   * @returns {(Observable<DataResponse<SubscriberModel> | HandledErrorResponse>)}
   * @memberof SubscribersService
   */
  removeSubscriber(id: string): Observable<DataResponse<SubscriberModel> | HandledErrorResponse> {
    return this.http.delete<DataResponse<SubscriberModel>>(`${apiURL}/subscriber/${id}`, { withCredentials: true }).pipe(
      map((res: DataResponse<SubscriberModel>) => res))
      .catch((err: any, caught: Observable<DataResponse<SubscriberModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }

  loadSubscriber(id: string): Observable<DataResponse<SubscriberModel> | HandledErrorResponse> {
    return this.http.get<DataResponse<SubscriberModel>>(`${apiURL}/subscriber/${id}`, { withCredentials: true }).pipe(
      map((res: DataResponse<SubscriberModel>) => res))
      .catch((err: any, caught: Observable<DataResponse<SubscriberModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }

  editSubscriber(subscriber: SubscriberModel): Observable<DataResponse<SubscriberModel> | HandledErrorResponse> {
    return this.http.put<DataResponse<SubscriberModel>>(
      `${apiURL}/subscriber/${subscriber._id}`, subscriber, { withCredentials: true }).pipe(
      map((res: DataResponse<SubscriberModel>) => res))
      .catch((err: any, caught: Observable<DataResponse<SubscriberModel>>) => {
        return this.globalErrorHandler.handleError(err);
      });
  }
}
