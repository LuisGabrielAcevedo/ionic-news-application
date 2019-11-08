import { Component, OnInit } from "@angular/core";
import { TopHeadlines } from "src/app/model/top-headlines";
import { Article } from "src/app/interfaces/interfaces";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  public news: Article[] = [];
  public page: number = 1;
  constructor() {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(event?) {
    TopHeadlines.page(this.page)
      .option("country", "us")
      .option("category", "business")
      .findRx()
      .pipe(
        tap(resp => {
          if (!resp.articles.length && event) {
            event.target.disabled = true;
            event.target.complete();
          }
        }),
        filter(resp => resp.articles.length)
      )
      .subscribe(resp => {
        this.news.push(...resp.articles);
        if (event) event.target.complete();
      });
  }

  nextPage(event) {
    this.page++;
    this.loadNews(event);
  }
}
