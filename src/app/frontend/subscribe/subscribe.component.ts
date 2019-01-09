import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';
import { FormBase } from 'projects/thejsblogadmin/src/app/admin-portal/core/form.base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'b-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent extends FormBase<any> implements OnInit {
  formGroup: FormGroup;
  message: string;

  constructor(route: ActivatedRoute, private fb: FormBuilder, private postsService: PostsService) {
    super(route);
    this.formGroup = this.fb.group({
      email: [null, [Validators.email]]
    });    
  }

  ngOnInit() {
  }

  submitCreateForm() {
    const email = this.formGroup.get('email').value;
    if (!email) {
      return;
    }
    this.postsService.subscribe(email).subscribe(res => {
      this.message = "Thank you for subscribing";
    })
  }
}
