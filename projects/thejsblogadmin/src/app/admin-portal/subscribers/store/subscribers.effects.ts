
import {mergeMap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { REQUEST_LOAD_SUBSCRIBERS, LoadSubscribers, SubscribersError, SubscriberAction,
  REQUEST_DELETE_USER, SubscriberDeleteSuccess, REQUEST_CREATE_USER,
  SubscriberCreateSuccess, REQUEST_LOAD_USER, SubscriberLoadSuccess, ResetEditingSubscriber, REQUEST_EDIT_USER,
  SubscriberEditSuccess } from './subscribers.actions';
import { SubscribersService } from '../subscribers.service';
import { RowsResponse, DataResponse } from '../../core/response.model';
import { SubscriberModel } from '../subscriber.model';
import { SubscribersFeatureState } from './subscribers.reducer';
import { Observable } from 'rxjs';


/**
 * The subscribers effect class to do some asynchronous actions.
 * Loading of subscribers, deleting subscribers, creating subscribers and updating.
 *
 * @export
 * @class SubscribersEffect
 */
@Injectable()
export class SubscribersEffect {
  constructor(
    private actions$: Actions,
    private subscribersService: SubscribersService,
    private store: Store<SubscribersFeatureState>,
    private router: Router
  ) { }
  @Effect()
  $requestLoadSubscribersEffect = this.actions$
    .ofType(REQUEST_LOAD_SUBSCRIBERS).pipe(
    map((action: SubscriberAction) => action.payload),
    mergeMap(() => {
        return this.subscribersService.getSubscribers().pipe(
          map((response: RowsResponse<SubscriberModel>) => {
            if (response.rows) {
              return new LoadSubscribers(response.rows);
            }
          }))
          .catch((err: any, caught: Observable<SubscribersError | LoadSubscribers>) => {
            this.store.dispatch(new SubscribersError(err, REQUEST_LOAD_SUBSCRIBERS));
            return of();
          });
    }));

  @Effect()
  $requestDeleteSubscriberEffect = this.actions$
    .ofType(REQUEST_DELETE_USER).pipe(
    map((action: SubscriberAction) => action.payload),
    mergeMap((id: string) => {
      return this.subscribersService.removeSubscriber(id).pipe(
        map((response: DataResponse<SubscriberModel>) => {
          if (response.data) {
            return new SubscriberDeleteSuccess(response.data);
          }
        }))
        .catch((err: any, caught: Observable<SubscribersError | SubscriberDeleteSuccess>) => {
          this.store.dispatch(new SubscribersError(err, REQUEST_DELETE_USER));
          return of();
        });
    }));

  @Effect()
  $requestCreateSubscriberEffect = this.actions$
    .ofType(REQUEST_CREATE_USER).pipe(
    map((action: SubscriberAction) => action.payload),
    mergeMap((subscriber: SubscriberModel) => {
      return this.subscribersService.addSubscriber(subscriber).pipe(
        map((response: DataResponse<SubscriberModel>) => {
          if (response.data) {
            this.router.navigate(['/subscribers']);
            return new SubscriberCreateSuccess(response.data);
          }
        }))
        .catch((err: any, caught: Observable<SubscribersError | SubscriberCreateSuccess>) => {
          this.store.dispatch(new SubscribersError(err, REQUEST_CREATE_USER));
          return of();
        });
    }));
  @Effect()
  $requestLoadSubscriberEffect = this.actions$
    .ofType(REQUEST_LOAD_USER).pipe(
    map((action: SubscriberAction) => action.payload),
    mergeMap((id: string) => {
      this.store.dispatch(new ResetEditingSubscriber());
      return this.subscribersService.loadSubscriber(id).pipe(
        map((response: DataResponse<SubscriberModel>) => {
          if (response.data) {
            return new SubscriberLoadSuccess(response.data);
          }
        }))
        .catch((err: any, caught: Observable<SubscribersError | SubscriberLoadSuccess>) => {
          this.store.dispatch(new SubscribersError(err, REQUEST_LOAD_USER));
          return of();
        });
    }));

  @Effect()
  $requestEditSubscriberEffect = this.actions$
    .ofType(REQUEST_EDIT_USER).pipe(
    map((action: SubscriberAction) => action.payload),
    mergeMap((subscriber: SubscriberModel) => {
      return this.subscribersService.editSubscriber(subscriber).pipe(
        map((response: DataResponse<SubscriberModel>) => {
          if (response.data) {
            this.router.navigate(['/subscribers']);
            return new SubscriberEditSuccess(response.data);
          }
        }))
        .catch((err: any, caught: Observable<SubscribersError | SubscriberLoadSuccess>) => {
          this.store.dispatch(new SubscribersError(err, REQUEST_EDIT_USER));
          return of();
        });
    }));
}
