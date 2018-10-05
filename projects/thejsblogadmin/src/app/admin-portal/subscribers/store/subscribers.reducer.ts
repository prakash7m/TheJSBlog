import { Action } from '@ngrx/store';

import { SubscriberModel } from '../subscriber.model';
import {
  LOAD_SUBSCRIBERS, SubscriberAction, SUBSCRIBERS_BUSY, SUBSCRIBERS_ERROR, REQUEST_LOAD_SUBSCRIBERS,
  USER_DELETE_SUCCESS, REQUEST_DELETE_USER, REQUEST_CREATE_USER,
  USER_CREATE_SUCCESS, USER_LOAD_SUCCESS, REQUEST_LOAD_USER, RESET_EDITING_USER,
  USER_EDIT_SUCCESS, REQUEST_EDIT_USER
} from './subscribers.actions';
import { HandledErrorResponse } from '../../core/response.model';
import { StateHelper, MetaState } from '../../core/state.helper';

export interface SubscribersReducerState {
  subscribers(state: SubscribersFeatureState, action: SubscriberAction): SubscribersFeatureState;
}

export interface SubscribersState {
  subscribers: SubscribersFeatureState;
}

export interface SubscribersFeatureState {
  subscribersList: SubscriberModel[];
  meta: MetaState<SubscriberModel>;
}

export const initialSubscribersFeatureState: SubscribersFeatureState = {
  subscribersList: [],
  meta: {}
};

export const subscribersReducer = (pstate: SubscribersFeatureState = initialSubscribersFeatureState,
  action: SubscriberAction): SubscribersFeatureState => {
  const state = StateHelper.interceptMeta(pstate, action);
  switch (action.type) {
    case LOAD_SUBSCRIBERS:
      return {
        ...state,
        subscribersList: action.payload
      };
    case SUBSCRIBERS_BUSY:
      return {
        ...state,
        subscribersBusy: action.payload
      };
    case SUBSCRIBERS_ERROR:
      return {
        ...state
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        subscribersList: [...state.subscribersList.filter(item => item._id !== action.payload._id)]
      };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        subscribersList: [...state.subscribersList, action.payload]
      };
    case USER_LOAD_SUCCESS:
      return {
        ...state
      };
    case USER_EDIT_SUCCESS:
      return {
        ...state,
        subscribersList: [...state.subscribersList.map(item => item._id === action.payload._id ? action.payload : item)]
      };
    case RESET_EDITING_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};

export const subscribersFeatureReducer: SubscribersReducerState = {
  subscribers: subscribersReducer
};
