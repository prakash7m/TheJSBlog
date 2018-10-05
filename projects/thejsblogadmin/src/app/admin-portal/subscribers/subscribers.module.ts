import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SubscribersRoutingModule } from './subscribers-routing.module';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { CoreModule } from '../core/core.module';
import { SubscribersService } from './subscribers.service';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscribersComponent } from './subscribers.component';
import { SubscribersEffect } from './store/subscribers.effects';
import { subscribersReducer } from './store/subscribers.reducer';


@NgModule({
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    CoreModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('subscribersFeature', {
      subscribers: subscribersReducer
    }),
    EffectsModule.forFeature([SubscribersEffect])
  ],
  providers: [SubscribersService],
  exports: [SubscriberListComponent, SubscriberFormComponent],
  declarations: [SubscriberListComponent, SubscriberFormComponent, SubscribersComponent]
})
export class SubscribersModule { }
