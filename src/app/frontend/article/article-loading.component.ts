import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b-article-loading',
  template: `
    <!-- Title -->
    <h1 class="mt-4 linear-background loading-header" style="">&nbsp;</h1>
    <!-- Author -->
    <p class="lead linear-background loading-30" style="">&nbsp;</p>

    <hr>

    <!-- Date/Time -->
    <p class="linear-background loading-50" style="">&nbsp;</p>

    <hr>

    <!-- Preview Image -->
    <div class="linear-background loading-img" style="height: 200px">&nbsp;</div>

    <hr>

    <!-- Post Content -->
    <p class="lead linear-background loading-100" style="">&nbsp;</p>
    <p class="lead linear-background loading-100" style="">&nbsp;</p>
    <p class="lead linear-background loading-100" style="">&nbsp;</p>
    <p class="lead linear-background loading-100" style="">&nbsp;</p>
    <p class="lead linear-background loading-50" style="">&nbsp;</p>
  `,
  styleUrls: ['../loading/loading.component.css']
})
export class ArticleLoadingComponent {
  items: [1];
}
