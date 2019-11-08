import { Component, ViewChild, OnInit } from "@angular/core";
import { IonSegment, IonInfiniteScroll } from "@ionic/angular";
import { TopHeadlines } from "src/app/model/top-headlines";
import { Article } from "src/app/interfaces/interfaces";
import { filter, tap } from "rxjs/operators";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, { static: true }) public segment: IonSegment;
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;
  public page: number = 1;
  public news: Article[] = [];
  public categories: string[] = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ];
  constructor() {}

  ngOnInit() {
    this.segment.value = this.categories[0];
    this.loadNews(this.segment.value);
  }

  loadNews(category: string, scroll?: boolean) {
    TopHeadlines.option("country", "us")
      .option("category", category)
      .page(this.page)
      .findRx()
      .pipe(
        tap(resp => {
          if (!resp.articles.length && scroll) {
            this.infiniteScroll.disabled = true;
            this.infiniteScroll.complete();
          }
        }),
        filter(resp => resp.articles.length)
      )
      .subscribe(resp => {
        this.news.push(...resp.articles);
        if (scroll) this.infiniteScroll.complete();
      });
  }

  changeCategory(event) {
    this.news = [];
    this.page = 1;
    this.infiniteScroll.disabled = false;
    this.loadNews(event.detail.value);
  }

  nextPage() {
    this.page++;
    this.loadNews(this.segment.value, true);
  }
}
