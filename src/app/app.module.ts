import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FrontendModule } from './frontend/frontend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    BrowserModule.withServerTransition({ appId: 'the-js-blog' }),
    BrowserTransferStateModule,
    FrontendModule,
    AppRoutingModule,
    HttpModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ShareButtonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
