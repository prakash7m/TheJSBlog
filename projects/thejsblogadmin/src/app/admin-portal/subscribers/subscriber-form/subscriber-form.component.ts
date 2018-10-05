import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';


import { CustomValidator } from './custom.validator';
import {
  RequestCreateSubscriber, RequestLoadSubscriber, ResetEditingSubscriber,
  RequestEditSubscriber, REQUEST_CREATE_USER, REQUEST_EDIT_USER, REQUEST_LOAD_USER
} from '../store/subscribers.actions';
import { Observable } from 'rxjs';

import { SubscribersState } from '../store/subscribers.reducer';
import { SubscriberModel } from '../subscriber.model';
import { FormBase } from '../../core/form.base';
import { StateHelper } from '../../core/state.helper';


@Component({
  selector: 'b-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.scss']
})
export class SubscriberFormComponent extends FormBase<SubscriberModel> implements OnInit {
  formGroup: FormGroup;
  featureState$ = StateHelper.stateForFeature(this.store, 'subscribersFeature', 'subscribers');
  errorResponse$ = StateHelper.errorFor(this.featureState$, [REQUEST_LOAD_USER, REQUEST_CREATE_USER, REQUEST_EDIT_USER]);
  busy$: Observable<boolean> = StateHelper.progressFor(this.featureState$, [REQUEST_LOAD_USER, REQUEST_CREATE_USER, REQUEST_EDIT_USER]);
  editingItem$ = StateHelper.editingModelFor(this.featureState$);
  busyMessages: {[key: string]: string} = {
    [REQUEST_LOAD_USER]: 'Loading subscriber',
    [REQUEST_CREATE_USER]: 'Creating subscriber',
    [REQUEST_EDIT_USER]: 'Editing subscriber'
  };
  constructor(route: ActivatedRoute, private fb: FormBuilder, private store: Store<any>) {
    super(route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  initCreateForm() {
    this.store.dispatch(new ResetEditingSubscriber());
    const passwordControl: FormControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null],
      subscribed: [null]
    });
  }

  initEditForm() {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null]
    });
  }

  loadForm(id) {
    this.store.dispatch(new RequestLoadSubscriber(id));
  }

  submitCreateForm() {
    const subscriber = {
      name: this.formGroup.get('name').value,
      email: this.formGroup.get('email').value
    };
    this.store.dispatch(new RequestCreateSubscriber(subscriber));
  }

  submitEditForm() {
    const subscriber = {
      _id: this.editMode,
      name: this.formGroup.get('name').value,
      email: this.formGroup.get('email').value
    };
    this.store.dispatch(new RequestEditSubscriber(subscriber));
  }
}
