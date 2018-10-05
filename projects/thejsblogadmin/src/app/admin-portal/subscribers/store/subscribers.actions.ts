import { SubscriberModel } from '../subscriber.model';
import { HandledErrorResponse } from '../../core/response.model';
import { MetaState } from '../../core/state.helper';

export const LOAD_SUBSCRIBERS = '[subscribers] LOAD';
export const REQUEST_LOAD_SUBSCRIBERS = '[subscribers] REQUEST LOAD';
export const SUBSCRIBERS_BUSY = '[subscribers] SUBSCRIBERS BUSY';
export const SUBSCRIBERS_ERROR = '[subscribers] SUBSCRIBERS ERROR';
export const REQUEST_DELETE_USER = '[subscribers] REQUEST DELETE';
export const USER_DELETE_SUCCESS = '[subscribers] DELETE SUCCESS';
export const REQUEST_CREATE_USER = '[subscribers] REQUEST CREATE';
export const USER_CREATE_SUCCESS = '[subscribers] CREATE SUCCESS';
export const REQUEST_LOAD_USER = '[subscribers] REQUEST LOAD USER';
export const USER_LOAD_SUCCESS = '[subscribers] LOAD USER SUCCESS';
export const RESET_EDITING_USER = '[subscribers] RESET EDITING USER';
export const REQUEST_EDIT_USER = '[subscribers] REQUEST EDIT USER';
export const USER_EDIT_SUCCESS = '[subscribers] EDIT USER SUCCESS';

export interface SubscriberAction {
  type: string;
  payload?: any;
}

export class LoadSubscribers implements SubscriberAction {
  readonly type: string = LOAD_SUBSCRIBERS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_LOAD_SUBSCRIBERS]: false } };
  constructor(public payload: SubscriberModel[]) { }
}

export class RequestLoadSubscribers implements SubscriberAction {
  readonly type: string = REQUEST_LOAD_SUBSCRIBERS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_LOAD_SUBSCRIBERS]: true } };
  constructor() { }
}

export class SubscribersBusy implements SubscriberAction {
  readonly type: string = SUBSCRIBERS_BUSY;
  constructor(public payload: boolean) { }
}

export class SubscribersError implements SubscriberAction {
  readonly type: string = SUBSCRIBERS_ERROR;
  readonly meta: MetaState<SubscriberModel> = { progress: { [this.initiator]: false }, error: { [this.initiator]: this.payload } };
  constructor(public payload: HandledErrorResponse, public initiator: string) { }
}

export class RequestDeleteSubscriber implements SubscriberAction {
  readonly type: string = REQUEST_DELETE_USER;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_DELETE_USER]: true } };
  constructor(public payload: string) { }
}

export class SubscriberDeleteSuccess implements SubscriberAction {
  readonly type: string = USER_DELETE_SUCCESS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_DELETE_USER]: false } };
  constructor(public payload: SubscriberModel) { }
}

export class RequestCreateSubscriber implements SubscriberAction {
  readonly type: string = REQUEST_CREATE_USER;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_CREATE_USER]: true } };
  constructor(public payload: SubscriberModel) { }
}

export class SubscriberCreateSuccess implements SubscriberAction {
  readonly type: string = USER_CREATE_SUCCESS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_CREATE_USER]: false } };
  constructor(public payload: SubscriberModel) { }
}

export class RequestLoadSubscriber implements SubscriberAction {
  readonly type: string = REQUEST_LOAD_USER;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_LOAD_USER]: true }, editingModel: null };
  constructor(public payload: string) { }
}

export class SubscriberLoadSuccess implements SubscriberAction {
  readonly type: string = USER_LOAD_SUCCESS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_LOAD_USER]: false }, editingModel: this.payload };
  constructor(public payload: SubscriberModel) { }
}

export class ResetEditingSubscriber implements SubscriberAction {
  readonly type: string = RESET_EDITING_USER;
  constructor() { }
}

export class RequestEditSubscriber implements SubscriberAction {
  readonly type: string = REQUEST_EDIT_USER;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_EDIT_USER]: true } };
  constructor(public payload: SubscriberModel) { }
}

export class SubscriberEditSuccess implements SubscriberAction {
  readonly type: string = USER_EDIT_SUCCESS;
  readonly meta: MetaState<SubscriberModel> = { progress: { [REQUEST_EDIT_USER]: false } };
  constructor(public payload: SubscriberModel) { }
}

