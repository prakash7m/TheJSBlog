import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscribersComponent } from './subscribers.component';

const routes: Routes = [{
  path: '',
  component: SubscribersComponent,
  children: [{
    path: '',
    component: SubscriberListComponent,
    data: { title: 'Subscribers List' }
  }, {
    path: 'create',
    component: SubscriberFormComponent,
    data: { title: 'Subscriber Create' }
  }, {
    path: 'edit/:id',
    component: SubscriberFormComponent,
    data: { title: 'Subscriber Edit' }
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribersRoutingModule { }
