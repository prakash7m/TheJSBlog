import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Column } from '../../core/data-grid/data-grid.model';
import { SubscribersService } from '../subscribers.service';
import { SubscriberModel } from '../subscriber.model';
import { DataGridClass } from '../../core/data-grid/data-grid.class';
import { SubscribersFeatureState, SubscribersState } from '../store/subscribers.reducer';
import { RequestLoadSubscribers, RequestDeleteSubscriber,
  REQUEST_LOAD_SUBSCRIBERS, REQUEST_DELETE_USER } from '../store/subscribers.actions';
import { StateHelper } from '../../core/state.helper';
import { HandledErrorResponse } from '../../core/response.model';

@Component({
  selector: 'b-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.scss']
})
export class SubscriberListComponent extends DataGridClass<SubscriberModel> implements OnInit {
  columns: Column[] = [{
    dataIndex: 'email',
    text: 'Email',
    link: 'edit'
  }, {
    dataIndex: 'name',
    text: 'Full Name'
  }, {
    dataIndex: 'subscribed',
    text: 'Subscribed'
  }];
  emptyText = 'Subscribers not found';
  actions = [{
    text: 'Delete',
    handler: (row) => {
      this.deleteSubscriber(row._id);
    }
  }];
  featureState$ = StateHelper.stateForFeature(this.store, 'subscribersFeature', 'subscribers');
  busy$: Observable<boolean> = StateHelper.progressFor(this.featureState$, [REQUEST_LOAD_SUBSCRIBERS, REQUEST_DELETE_USER]);
  errorResponse$: Observable<HandledErrorResponse> = StateHelper.errorFor(this.featureState$,
    [REQUEST_LOAD_SUBSCRIBERS, REQUEST_DELETE_USER]);
  busyMessages: {[key: string]: string} = {
    [REQUEST_LOAD_SUBSCRIBERS]: 'Loading subscribers',
    [REQUEST_DELETE_USER]: 'Deleting subscriber'
  };
  constructor(private subscribersService: SubscribersService, private store: Store<SubscribersFeatureState>) {
    super();
    this.store.select('subscribersFeature').subscribe((state: SubscribersState) => {
      this.rows = state.subscribers.subscribersList;
    });
  }

  ngOnInit() {
    if (!this.rows.length) {
      this.loadSubscribers();
    }
  }

  loadSubscribers() {
    this.store.dispatch(new RequestLoadSubscribers());
  }

  deleteSubscriber(id) {
    this.store.dispatch(new RequestDeleteSubscriber(id));
  }
}
