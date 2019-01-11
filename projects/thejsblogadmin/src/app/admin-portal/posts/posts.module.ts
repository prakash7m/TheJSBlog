import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgSelectModule } from '@ng-select/ng-select';
import { CovalentTextEditorModule } from '@covalent/text-editor';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { CoreModule } from '../core/core.module';
import { PostsService } from './posts.service';
import { PostFormComponent } from './post-form/post-form.component';
import { PostsComponent } from './posts.component';
import { PostsEffect } from './store/posts.effects';
import { postsReducer } from './store/posts.reducer';
import { CategoriesModule } from '../categories/categories.module';
import { GalleryModule } from '../gallery/gallery.module';


@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    CoreModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('postsFeature', {
      posts: postsReducer
    }),
    EffectsModule.forFeature([PostsEffect]),
    NgSelectModule,
    CategoriesModule,
    GalleryModule,
    CovalentTextEditorModule
  ],
  providers: [PostsService],
  exports: [PostListComponent],
  declarations: [PostListComponent, PostFormComponent, PostsComponent]
})
export class PostsModule { }
