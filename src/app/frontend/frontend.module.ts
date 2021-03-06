import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'ngx-markdown';

import { FrontendRoutingModule } from './frontend-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CategoryTilesComponent } from './category-tiles/category-tiles.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PostTilesComponent } from './post-tiles/post-tiles.component';
import { CategoryHeroComponent } from './category-hero/category-hero.component';
import { ContainerWithSidebarComponent } from './container-with-sidebar/container-with-sidebar.component';
import { ArticleComponent } from './article/article.component';
import { SidebarPanelComponent } from './sidebar-panel/sidebar-panel.component';
import { PostComponent } from './post/post.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsHomeContainerComponent } from './posts-home-container/posts-home-container.component';
import { PostContainerComponent } from './post-container/post-container.component';
import { ArticleService } from './article/article.service';
import { FrontendComponent } from './frontend.component';
import { PostsService } from './posts.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from '../../../projects/thejsblogadmin/src/app/admin-portal/core/global-error-handler';
import { LoadingComponent } from './loading/loading.component';
import { PostTilesLoadingComponent } from './post-tiles/post-tiles-loading.component';
import { ArticleLoadingComponent } from './article/article-loading.component';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FrontendRoutingModule,
    HttpModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ShareButtonsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    HeroComponent,
    CategoryTilesComponent,
    FooterComponent,
    SubscribeComponent,
    PostTilesComponent,
    PostTilesLoadingComponent,
    CategoryHeroComponent,
    ContainerWithSidebarComponent,
    ArticleComponent,
    SidebarPanelComponent,
    PostComponent,
    SidebarComponent,
    PostsHomeComponent,
    PostsHomeContainerComponent,
    PostContainerComponent,
    FrontendComponent,
    LoadingComponent,
    ArticleLoadingComponent
  ],
  providers: [
    ArticleService,
    PostsService,
    HttpClient,
    GlobalErrorHandler
  ]
})
export class FrontendModule { }
